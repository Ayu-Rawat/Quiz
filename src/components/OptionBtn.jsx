import React,{useState,useEffect,useCallback} from 'react'

function OptionBtn({correctAns},{array}) { 
    const [option1,setOption1] = useState(null)
    const [option2,setOption2] = useState(null)
    const [option3,setOption3] = useState(null)

    const createOption= () => {
        useCallback(() => {
         let dummyArray = array
         let num = Math.floor(Math.random()*dummyArray.length )
         setOption1(dummyArray[num])
         dummyArray=dummyArray.slice(num,1)
         num = Math.floor(Math.random()*dummyArray.length )
         setOption2(dummyArray[num])
         dummyArray=dummyArray.slice(num,1)
         num = Math.floor(Math.random()*dummyArray.length )
         setOption3(dummyArray[num])
         let options = [option1,option2,option3,correctAns]
         for (let i = options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [options[i], options[j]] = [options[j], options[i]];
        }
        return options;
        },[correctAns,array])
    }

    useEffect(() => {createOption()},[correctAns,array])
    
    const optionArray=createOption()

  return (
    <>
      <div>
      {optionArray.map((opps) => (
        <div key={opps}>
            <button className='text-white bg-gray-400 rounded-md' value={{opps}} >{opps}</button>
        </div>
        ))}
      </div>
    </>
  )
}

export default OptionBtn
