import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { Container } from '@mui/material';




interface ErrorProps {
  statusCode: number;
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  let message;
  switch (statusCode) {
    case 404:
      message = 'Sorry, the page you are looking for cannot be found.';
      break;
    case 500:
      message = 'Internal server error';
      break;
    default:
      message = 'An error occurred';
  }

  return (
    <>
      <NextSeo title="Error" noindex />
      <Container>
        <h1>{message}</h1>
      </Container>
    </>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;



  
  return { statusCode };
};

export default Error;
