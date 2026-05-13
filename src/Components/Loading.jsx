import Loadings from '../assets/GameLoading.gif'

export default function Loading({ over }) {
    return (
        over && <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
            <img src={Loadings} alt="loading" style={{ width: '100px', marginLeft: "50%", transform: "translatex(-50%)" }} />
        </div>
    )
}
