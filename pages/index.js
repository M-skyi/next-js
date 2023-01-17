import Author from '../components/Author/Author';
import HistoryCommits from '../components/HistoryCommits/HistoryCommits';
import Loader from '../components/Loader/Loader';
import Result from '../components/NewsResult/Result';
import NoFoundNews from '../components/NoFoundNews/NoFoundNews';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home = ({ loader, noFound, result }) => {

  return(
  <div>
    {loader && <Loader />}
    {noFound && <NoFoundNews />}
    {result && <Result />}
    <Author />
    <HistoryCommits />
  </div>)
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'search'
      ])),
    },
  }
}
export default Home;
