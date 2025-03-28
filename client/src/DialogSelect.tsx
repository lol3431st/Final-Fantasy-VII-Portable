import { act, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { set } from 'mongoose';

function DialogSelect() {
  const chars :string[] = ["Cloud", "Tifa", "Aerith"];
  
  let cloudSpells :string[] = ["Braver", "Cross Slash", "Blade Beam"];
  let cloudMateria :string[] = ["Fire", "Ice", "Lightning"];
  let tifaSpells :string[] = ["Beat Rush", "Somersault", "Water Kick"];
  let tifaMateria :string[] = ["Poison", "Comet", "Divine Punishment"];
  let aerithSpells :string[] = ["Healing Wind", "Seal Evil", "Breath of the Earth"];
  let aerithMateria :string[] = ["Heal", "Revive", "Barrier"];
  
  let [actionQueue, setQueue] = useState<string[]>([]);

  interface Character {
    name: string;
    spells: string[];
    ATB: number;
    speed: number;
    hp: number;
    mp: number;
    materia: string[];
  }

  //let char1:Character = {name: "Cloud", spells: cloudSpells, ATB: 0, speed: 100, hp: 1000, mp: 100};
  let [char1, setChar1] = useState<Character>({name: "Cloud", spells: cloudSpells, ATB: 0, speed: 100, hp: 2934, mp: 100, materia: cloudMateria});
  let [char2, setChar2] = useState<Character>({name: "Tifa", spells: tifaSpells, ATB: 0, speed: 50, hp: 5123, mp: 100, materia: tifaMateria});
  let [char3, setChar3] = useState<Character>({name: "Aerith", spells: aerithSpells, ATB: 0, speed: 150, hp: 2102, mp: 100, materia: aerithMateria});
  useEffect(() => {
    setTimeout(() => {
      if (char1.ATB < 100) {
        setChar1(oldChar => ({...oldChar, ATB: oldChar.ATB + 1}));
        console.log(char1.ATB);
      } else {
        setChar1(oldChar => ({...oldChar, ATB: 100}));
        if (actionQueue.includes(char1.name) == false) {
          setQueue(oldQueue => [...oldQueue, char1.name]);
        }
      }
    }, char1.speed);

    

  }, [char1.ATB]);

  useEffect(() => {
    setTimeout(() => {
      if (char2.ATB < 100) {
        setChar2(oldChar => ({...oldChar, ATB: oldChar.ATB + 1}));
        console.log(char2.ATB);
      } else {
        setChar2(oldChar => ({...oldChar, ATB: 100}));
        if (actionQueue.includes(char2.name) == false) {
          setQueue(oldQueue => [...oldQueue, char2.name]);
        }
      }
    }, char2.speed);
  }, [char2.ATB]);

  useEffect(() => {
    setTimeout(() => {
      if (char3.ATB < 100) {
        setChar3(oldChar => ({...oldChar, ATB: oldChar.ATB + 1}));
        console.log(char3.ATB);
      } else {
        setChar3(oldChar => ({...oldChar, ATB: 100}));
        if (actionQueue.includes(char3.name) == false) {
          setQueue(oldQueue => [...oldQueue, char3.name]);
        }
      }
    }, char3.speed);
  }, [char3.ATB]);

  

  return (
    <>
    <div className='flex flex-row w-full '>
      <div id="characterSelect" className='blue-container'>
        <button className='menuCol'>{chars[0]}</button>
        <button className='menuCol'>{chars[1]}</button>
        <button className='menuCol'>{chars[2]}</button>
      </div>
      <div id="buttonSelect" className='blue-container'>
        <button className='menuCol'>Attack</button>
        <button className='menuCol'>Spells</button>
        <button className='menuCol'>Items</button>
      </div>
      <div id="stats" className='blue-container'>
        <div className='menuCol flex-col'>
          <div className='menuRow'><p>HP: {char1.hp}</p><p>MP: {char1.mp}</p><p>ATB: {char1.ATB}</p></div>
          <div className='menuRow'><p>HP: {char2.hp}</p><p>MP: {char2.mp}</p><p>ATB: {char2.ATB}</p></div>
          <div className='menuRow'><p>HP: {char3.hp}</p><p>MP: {char3.mp}</p><p>ATB: {char3.ATB}</p></div>
          </div>
        </div>

    </div>
      <h1>Action Queue: {actionQueue}</h1>

    </>
  )
}

export default DialogSelect

/*
{
        charID == 1 ? cloudSpells.map((spell, index) => { return (spellID-1 == index ? <h1>&gt; {spell}</h1> : <h1>{spell}</h1>)})

        : charID == 2 ? tifaSpells.map((spell, index) => { return (spellID-1 == index ? <h1>&gt; {spell}</h1> : <h1>{spell}</h1>)})

        : aerithSpells.map((spell, index) => { return (spellID-1 == index ? <h1>&gt; {spell}</h1> : <h1>{spell}</h1>)})
        }
        */