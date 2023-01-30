interface ProgressBarProps {
    progress: number
}

export function ProgressBar(props: ProgressBarProps) {
    return (
        <div className='h-3 rounded-xl bg-yellow-500 mt-4'>
            <div
                role={'progressbar'}
                aria-label='Progresso de hábitos completos nesse dia'
                aria-valuenow={props.progress}
                className='h-3 rounded-xl bg-yellow-800 transition-all'
                style={{ width: `${props.progress}%` }}
            />
        </div>
    )
}