import illustrationImg from '../../images/DownloadApp/illustration.svg';
import appStoreImg from '../../images/DownloadApp/appstore.png';
import googlePlayImg from '../../images/DownloadApp/googleplay.png';

import { Container } from './styles';

export default function DownloadApp() {
  return (
    <Container>
      <div className='download__content'>
        <h1 className='download__title'>Delicious Planet-friendly food</h1>
        <p className='download__description'>
          Culpa qui officia deserunt mollit anim id est laborum. 
          Sed ut perspiciatis unde omnis iste natus error sit.
        </p>
        <button className='download__button'>LET'S TRY</button>
        <p className='download__app'>Download on iOS and android for free</p>
        <div className='download__stores'>
          <img src={appStoreImg} alt="Mellow App Store"/>
          <img src={googlePlayImg} alt="Mellow Google Play"/>
        </div>
      </div>
      <div className='download__image'>
        <img src={illustrationImg} alt="App Illustration"/>
      </div>
    </Container>
  );
}