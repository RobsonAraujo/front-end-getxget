import { ILoadingProps } from './ILoadingProps'
import { LoadingStyled } from './styles'

const Loader = ({ isLoading }: ILoadingProps) => (
  <>
    {isLoading && (
      <LoadingStyled
        key="loading"
        className="animate__animated animate__fadeIn"
        data-testid="loader"
        id="loader"
      >
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </LoadingStyled>
    )}
  </>
)

export default Loader
