import React from 'react'
import { useEffect, useState } from 'react';
import Point from './Point';
import './question.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Question() {


    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple')
                .then((response) => {
                    return response.json()
                }).then((data) => {
                    
                    setListQuestion(data.results)
                })
      },[])
    
      const [listQuestion,setListQuestion] = useState([]);
      const[point,setPoint] = useState(0)
      const handleChange = (e) => {
        const useAnswer = e.target.value;
        listQuestion.map((ev) =>{
            if(ev.correct_answer === useAnswer){
                setPoint(point + 10)
                toast("bạn Trả Lời Đúng:+" + 10)
                toast("Số Điểm Của Bạn là :" + (point + 10))
            }
           
        })
        
      }

     
    return(
        <>
            <h1>Sport Question</h1>
            <Point
        
            point = {point}
            />
            {
                listQuestion.map((e)=>{
                    let arr = [];
                    arr.push(e.correct_answer);
                    
                        e.incorrect_answers.map((e)=>{
                            arr.push(e);
                            
                        })
                    arr.sort();
                    return (
                        <>
                            <div className = 'box'>{e.question}</div>
                            <div>
                                {
                                    arr.map((e)=>{
                                    
                                    return(
                                        
                                        <div className = 'answer'>
                                            
                                            <input type="checkbox" value ={e} onChange={handleChange}></input>
                                            <div>{e}</div>
                                            
                                        </div>
                                    )
                                })}
                            </div>
                            
                        </>
                        
                       
                    )
                })
            }
        
        <ToastContainer />
        </>
        
    )
  
}
