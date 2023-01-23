import * as Checkbox from '@radix-ui/react-checkbox'
import * as Popover from '@radix-ui/react-popover'
import clsx from 'clsx'
import { Calendar, Check } from 'phosphor-react'
import { ProgressBar } from './ProgressBar'

interface HabitDayProps {
	completed: number
	amount: number
}

export function HabitDay({ completed, amount }: HabitDayProps) {

	const completedPercentage = Math.round((completed / amount) * 100)
	return (
		<Popover.Root>

			<Popover.Trigger
				className={clsx('w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg',
					{ 'bg-zinc-900 border-zinc-800': completedPercentage === 0 },
					{ 'bg-yellow-900 border-yellow-800': completedPercentage > 0 && completedPercentage < 20 },
					{ 'bg-yellow-800 border-yellow-700': completedPercentage >= 20 && completedPercentage < 40 },
					{ 'bg-yellow-700 border-yellow-600': completedPercentage >= 40 && completedPercentage < 60 },
					{ 'bg-yellow-600 border-yellow-500': completedPercentage >= 60 && completedPercentage < 80 },
					{ 'bg-yellow-500 border-yellow-400': completedPercentage >= 80 }
				)}
			/>

			<Popover.Portal>
				<Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col opacity-95'>
					<Popover.Arrow height={8} width={16} className='fill-zinc-900' />

					<div className='flex items-center justify-around '>
						<Calendar className='mt-1 font-extrabold text-3xl' />
						<div >
							<span>terça-feira</span>{' - '}
							<span>17/01</span>
						</div>
					</div>

					<ProgressBar progress={completedPercentage} />

					<div className='mt-4 flex flex-col gap-3'>
						<Checkbox.Root className='flex items-center  gap-3 group'>

							<div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-800 border-2 border-zinc-500 group-data-[state=checked]:bg-yellow-500 group-data-[state=checked]:border-yellow-600 opacity-90'>
								<Checkbox.Indicator >
									<Check size={24} className=' text-violet-600' />
								</Checkbox.Indicator>
							</div>

							<span className='font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400'>
								Beber dois litros de água
							</span>

						</Checkbox.Root>
						<Checkbox.Root className='flex items-center  gap-3 group'>

							<div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-800 border-2 border-zinc-500 group-data-[state=checked]:bg-yellow-500 group-data-[state=checked]:border-yellow-600 opacity-90'>
								<Checkbox.Indicator >
									<Check size={24} className=' text-violet-600' />
								</Checkbox.Indicator>
							</div>

							<span className='font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400'>
								Beber dois litros de água
							</span>

						</Checkbox.Root>
						<Checkbox.Root className='flex items-center  gap-3 group'>

							<div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-800 border-2 border-zinc-500 group-data-[state=checked]:bg-yellow-500 group-data-[state=checked]:border-yellow-600 opacity-90'>
								<Checkbox.Indicator >
									<Check size={24} className=' text-violet-600' />
								</Checkbox.Indicator>
							</div>

							<span className='font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400'>
								Beber dois litros de água
							</span>

						</Checkbox.Root>
						<Checkbox.Root className='flex items-center  gap-3 group'>

							<div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-800 border-2 border-zinc-500 group-data-[state=checked]:bg-yellow-500 group-data-[state=checked]:border-yellow-600 opacity-90'>
								<Checkbox.Indicator >
									<Check size={24} className=' text-violet-600' />
								</Checkbox.Indicator>
							</div>

							<span className='font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400'>
								Beber dois litros de água
							</span>

						</Checkbox.Root>
					</div>
				</Popover.Content>
			</Popover.Portal>

		</Popover.Root>
	)
}
