import * as Popover from '@radix-ui/react-popover'
import { Calendar } from 'phosphor-react'
import { ProgressBar } from './ProgressBar'

interface HabitProps {
	completed: number
}

export function HabitDay() {
	return (
		<Popover.Root>
			<Popover.Trigger className='w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg' />
			<Popover.Portal>
				<Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col '>
					<Popover.Arrow height={8} width={16} className='fill-zinc-900' />
					<div className='flex items-center justify-around '>
						<Calendar className='mt-1 font-extrabold text-3xl' />
						<div >
							<span>terça-feira</span>{' - '}
							<span>17/01</span>
						</div>
					</div>
					<ProgressBar progress={60} />
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root>
	)
}
