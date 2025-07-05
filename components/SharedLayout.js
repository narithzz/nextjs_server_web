import Header from './Header';

export default function SharedLayout({ children }) {
  return (
    <>
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
    </>
  );
}