import './styles.css'
import { useState, useEffect } from 'react'

import noCharacter from './utilities/noCharacter'
import Character from './components/Character'
import StatusBars from './components/StatusBars'
import Options from './components/Options'
import Button from './components/Button'
import attackOptionsList from './data/attackOptionsList'
import namesList from './data/namesList'

export default function App() {
  const [characterData, setCharacterData] = useState({
    hat: true,
    shield: true,
    weapon: 'sword',
    name: 'Köpük',
    attackOptions: attackOptionsList.slice(10, 16),
    stats: {
      hp: 10,
      mp: 20,
      strength: 50,
    },
  })
  useEffect(() => {
    setCharacterData(characterData)
  }, [])
  let dataToUse, functionToUse

  if (typeof characterData !== 'undefined') {
    dataToUse = characterData
  } else {
    dataToUse = noCharacter.noData
  }

  if (typeof setCharacterData !== 'undefined') {
    functionToUse = setCharacterData
  } else {
    functionToUse = noCharacter.noFunction
  }

  return (
    <div className="wrapper">
      <StatusBars characterData={dataToUse} />

      <Character characterData={dataToUse} />

      <Options characterData={dataToUse} />

      <Button setCharacterData={functionToUse} />
    </div>
  )
}
