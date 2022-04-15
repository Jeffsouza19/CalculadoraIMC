import { useState } from 'react'
import './App.css'
import poweredImage from './assets/powered.png'
const App = () =>{

  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const handleCalc = () =>{
    if(heightField && weightField){

    }else{
      alert('Preencha todos os campos!')
    }
  }
  return (
    <div className='box-border font-sans mx-5'>
        <header className='container mt-5 flex justify-center'>
            <div>
                <img src={poweredImage} alt="" className='h-10' />
            </div>
        </header>
        <div className='container flex items-center flex-col'>
            <div className='mt-5 p-2 flex-col flex items-center'>
                <h1 className='text-red-500'>Caucule o seu IMC</h1>
                <p>IMC é a sigla para Índice de Massa Corporal, parâmetro adotado pela OMS (Organização Mundial de Saúde) para caulcular o peso ideal de cada pessoa. </p>
            </div>
            <div className='mt-5 flex flex-col' >
                <input type="number" className='border-b outline-none border-green-400 mb-2 focus:border-green-600' placeholder='Altura em metros ex. 1,75' value={heightField > 0 ? heightField : ''} onChange={e=> setHeightField(parseFloat(e.target.value))} />
                <input type="number" className='border-b outline-none border-green-400 mt-2 mb-2 focus:border-green-600' placeholder='Peso'value={weightField > 0 ? weightField : ''} onChange={e=> setWeightField(e.target.valueAsNumber)} />
                <button onClick={handleCalc} className='font-bold ring-1 ring-green-400 bg-green-200 py-1 rounded-xl mt-2 hover:bg-green-50 ease-in duration-300 hover:text-green-900'>Calcular</button>
            </div>
        </div>
    </div>
  )
}

export default App
