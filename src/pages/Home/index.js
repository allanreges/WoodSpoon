import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Container, Title, Background, MealOptions, SelectBox, ButtonsBox, TextBox, PriceTag, Content, PriceBox, MealSelects } from './styles'
import ImgBg from '../../assets/Background/bg1.jpg'

import CheckboxButton from '../../components/CheckBoxButton'
import Button from '../../components/Button'

import PersonIcon from '../../assets/Icons/user.svg'
import ToolsIcon from '../../assets/Icons/kitchen-tools.svg'

const PLANS = gql`
{
  listPlans {
    id
    weeklyRecipes
    numberOfPeople
    price
  }
}
`;

const Home = () => {
  const { loading, error, data } = useQuery(PLANS);
  const [numberOfPeople, setNumberOfPeople] = useState([])
  const [weeklyRecipes, setWeeklyRecipes] = useState([])
  const [activePlan, setActivePlan] = useState(null)
  const [activePrice, setActivePrice] = useState(0)


  useEffect(() => {
    if (data && !activePlan) {
      peopleGroups()
      quantityGroups()
      setFirstPlan()
    }
    if (activePlan) {
      findPlan()
    }

  }, [data, activePlan])

  const peopleGroups = useCallback(() => {
    const groups = []
    data.listPlans.map(item => groups.push(item.numberOfPeople))
    setNumberOfPeople([...new Set(groups)])
  })

  const quantityGroups = useCallback(() => {
    const groups = []
    data.listPlans.map(item => groups.push(item.weeklyRecipes))
    setWeeklyRecipes([...new Set(groups)])
  })

  const setFirstPlan = useCallback(() => {
    const plan = {
      weeklyRecipes: data.listPlans[0].weeklyRecipes,
      numberOfPeople: data.listPlans[0].numberOfPeople
    }
    if (!activePlan) {
      setActivePlan(plan)
    }
  })

  function handleSelection(value, type) {
    if (type === 'numberOfPeople') {
      setActivePlan((prevState) => ({
        ...prevState,
        numberOfPeople: value,
      }));
    }
    if (type === 'weeklyRecipes') {
      setActivePlan((prevState) => ({
        ...prevState,
        weeklyRecipes: value,
      }));
    }
  }

  function findPlan() {
    const selected = data.listPlans.filter(item => {
      return item.numberOfPeople === activePlan.numberOfPeople && item.weeklyRecipes === activePlan.weeklyRecipes
    })
    const price = selected[0] ? selected[0].price : 0;
    setActivePrice(price)
  }

  return (
    <Container>
      <Title>Configure o plano que <br /><span>melhor encaixa na sua rotina.</span></Title>
      <Content>
        <Background>
          <img src={ImgBg} />
        </Background>
        <MealOptions>
          <h2>Gostou e ainda não é assinante?<br />Escolha já um plano semanal!</h2>
          <MealSelects>
            <SelectBox>
              <TextBox>
                <img src={PersonIcon} />
                <p>Receita para<br /> quantas pessoas?</p>
              </TextBox>
              <ButtonsBox>
                {numberOfPeople && numberOfPeople.map(item => <CheckboxButton key={item} onClick={() => handleSelection(item, 'numberOfPeople')} activeButton={item === activePlan.numberOfPeople}>{item}</CheckboxButton>)}
              </ButtonsBox>
            </SelectBox>
            <SelectBox>
              <TextBox>
                <img src={ToolsIcon} />
                <p>Quantas receitas<br /> por semana?</p>
              </TextBox>
              <ButtonsBox>
                {weeklyRecipes && weeklyRecipes.map(item => <CheckboxButton key={item} onClick={() => handleSelection(item, 'weeklyRecipes')} activeButton={item === activePlan.weeklyRecipes}>{item}</CheckboxButton>)}
              </ButtonsBox>
            </SelectBox>
          </MealSelects>
          <PriceBox>
            <div>
              <h3>PREÇO DO KIT POR SEMANA</h3>
              <PriceTag>R$<span>{activePrice}</span></PriceTag>
            </div>
            <div>
              <Button>Quero assinar agora!</Button>
            </div>
          </PriceBox>
        </MealOptions>
      </Content>
    </Container>
  )
}

export default Home
