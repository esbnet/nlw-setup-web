import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';
import { FormEvent, useState } from 'react';

const dayOfWeek = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado'
]

export function NewHabitForm() {
  const [title, setTitle] = useState('')
  const [weekDays, setWeekDays] = useState<number[]>([])

  function createNewHabit(e: FormEvent) {
    e.preventDefault();
  }

  function handleToogleWeeDay(weeDay: number) {
    if (weekDays.includes(weeDay)) {
      setWeekDays(weekDays.filter(day => day !== weeDay).sort())
    } else {
      setWeekDays([...weekDays, weeDay].sort())
    }
  }

  return (
    <form onSubmit={createNewHabit} className='w-full flex flex-col mt-6'>
      <label htmlFor="title" className='font-semibold leading-tight'>
        Qual seu comprometimento?
      </label>

      <input
        type="text"
        id='title'
        placeholder='Ex.: Exercícios, dormir bem, etc...'
        className='p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-500'
        autoFocus
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />

      <label htmlFor="" className='font-semibold leading-tight mt-4'>
        Quais as recorrências?
      </label>


      {dayOfWeek.map((weekDay, index) => {
        return (
          <div className='flex flex-col gap-2 mt-3'>
            <Checkbox.Root
              key={weekDay}
              className='flex items-center gap-3 group'
              onCheckedChange={() => handleToogleWeeDay(index)}
            >

              <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-800 border-2 border-zinc-500 group-data-[state=checked]:bg-yellow-500 group-data-[state=checked]:border-yellow-600 opacity-90'>
                <Checkbox.Indicator >
                  <Check size={24} className=' text-violet-600' />
                </Checkbox.Indicator>
              </div>

              <span className='text-white leading-tight'>
                {weekDay}
              </span>

            </Checkbox.Root>
          </div>
        )
      })}

      <button type='submit' className='mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-yellow-500 hover:bg-yellow-400'>
        <Check size={20} weight='bold' />
        Confirmar
      </button>
    </form>
  )
}