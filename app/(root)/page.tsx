import HeaderBox from '@/components/HeaderBox'
import RecentTransactions from '@/components/RecentTransactions';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
// import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
// import { getLoggedInUser } from '@/lib/actions/user.actions';
const Home = () => {
  const loggedIn = { firstName: 'Suryakanta' ,lastName: 'Sinha',email: 'sinha@gmail.com'}

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        <RecentTransactions />
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{}, {}, {}]}
      />
    </section>
  );
};

export default Home