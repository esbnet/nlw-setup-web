import * as Popover from '@radix-ui/react-popover'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { Calendar } from 'phosphor-react'
import { useState } from 'react'
import { HabitList } from './HabitList'
import { ProgressBar } from './ProgressBar'

interface HabitDayProps {
	date: Date
	defaultCompleted?: number
	amount?: number
}

export function HabitDay({ date, defaultCompleted = 0, amount = 0 }: HabitDayProps) {
	const [completed, setCompleted] = useState(defaultCompleted)

	const completedPercentage = amount > 0
		? Math.round((completed / amount) * 100)
		: 0

	const dayAndMonth = dayjs(date).format('DD / MM')
	const dayOdWeeks = dayjs(date).format('dddd')

	function handleCompletedChanged(completed: number) {
		setCompleted(completed)
	}

	return (
		<Popover.Root>

			<Popover.Trigger
				className={clsx('w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-90 transition-colors',
					{ 'bg-zinc-900 border-zinc-800': completedPercentage === 0 },
					{ 'bg-yellow-900 border-yellow-800': completedPercentage > 0 && completedPercentage < 20 },
					{ 'bg-yellow-800 border-yellow-700': completedPercentage >= 20 && completedPercentage < 40 },
					{ 'bg-yellow-700 border-yellow-600': completedPercentage >= 40 && completedPercentage < 60 },
					{ 'bg-yellow-600 border-yellow-500': completedPercentage >= 60 && completedPercentage < 80 },
					{ 'bg-yellow-500 border-yellow-400': completedPercentage >= 80 }
				)}
			/>

			<Popover.Portal>
				<Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col opacity-70 transition-opacity'>
					<Popover.Arrow height={8} width={16} className='fill-zinc-900' />
					<div className='flex items-center justify-around '>
						<Calendar className='mt-1 font-extrabold text-3xl' />
						<div >
							<span>{dayAndMonth}</span>{' - '}
							<span>{dayOdWeeks}</span>
						</div>
					</div>

					<ProgressBar progress={completedPercentage} />

					<HabitList date={date} onCompletedChanged={handleCompletedChanged} />
				</Popover.Content>
			</Popover.Portal>

		</Popover.Root>
	)
}
