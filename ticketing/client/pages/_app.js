import "bootstrap/dist/css/bootstrap.css";
import buildClient from "../api/buildClient";
import Header from '../components/header';

const AppComponent =  ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <div className="container">
        <Component currentUser={currentUser} {...pageProps} />
      </div>
    </div>
    );
};

AppComponent.getInitialProps = async (appContext) => {
  const axiosClient = buildClient(appContext.ctx);
  const { data } = await axiosClient.get('/api/users/currentuser')
  
  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx, axiosClient, data.currentUser); // pass getInitialProps to the compnents that is been rendered
  }
  
  return {
    pageProps,
    currentUser: data.currentUser
  };
};

export default AppComponent;