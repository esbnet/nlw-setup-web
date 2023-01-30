import * as Checkbox from '@radix-ui/react-checkbox'
import dayjs from 'dayjs'
import { Check } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { api } from '../lib/axios'


interface HabitListProps {
	date: Date;
	onCompletedChanged: (completed: number) => void
}

interface HabitsInfo {
	possibleHabits: Array<{
		id: string;
		title: string;
		created_at: string
	}>,
	completedHabits: string[]
}

export function HabitList({ date, onCompletedChanged }: HabitListProps) {
	const [habitsInfo, setHabitInfo] = useState<HabitsInfo>()

	useEffect(() => {
		api.get('/habits/day', {
			params: {
				date: date.toISOString()
			}
		}).then(response => {
			setHabitInfo(response.data)
		})
	}, [])

	async function handleToggleHabit(habitId: string) {
		await api.patch(`/habits/${habitId}/toggle`)

		const isHabitAlreadyCompleted = habitsInfo!.completedHabits.includes(habitId)

		let completedHabits: string[] = []

		if (isHabitAlreadyCompleted) {
			completedHabits = habitsInfo!.completedHabits.filter(id => id !== habitId)
		} else {
			completedHabits = [...habitsInfo!.completedHabits, habitId]
		}
		setHabitInfo({
			possibleHabits: habitsInfo!.possibleHabits,
			completedHabits
		})

		onCompletedChanged(completedHabits.length)
	}

	const isDateInPast = dayjs(date)
		.endOf('day')
		.isBefore(new Date())

	return (
		<div className='mt-4 flex flex-col gap-3'>

			{habitsInfo?.possibleHabits.map(habit => {
				return (
					<Checkbox.Root
						onCheckedChange={() => handleToggleHabit(habit.id)}
						checked={habitsInfo?.completedHabits.includes(habit.id)}
						disabled={isDateInPast}
						key={habit.id}
						className='flex items-center  gap-3 group disabled:cursor-not-allowed  disabled:opacity-50'
					>
						<div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-800 border-2 border-zinc-500 group-data-[state=checked]:bg-yellow-500 group-data-[state=checked]:border-yellow-600 opacity-90 transition-colors'>
							<Checkbox.Indicator >
								<Check size={24} className=' text-green-600' />
							</Checkbox.Indicator>
						</div>
						<span className='font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400'>
							{habit.title}
						</span>
					</Checkbox.Root>
				)
			})}

		</div>
	)
}