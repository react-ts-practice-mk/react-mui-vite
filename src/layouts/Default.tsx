import { ReactNode } from 'react';

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div>
      <header>
        {/* ヘッダーのコンテンツ */}
        <h1>Default Header</h1>
      </header>
      <main>
        {/* ページコンポーネント */}
        {children}
      </main>
      <footer>
        {/* フッターのコンテンツ */}
        <h1>Default Footer</h1>
      </footer>
    </div>
  );
}

export default DefaultLayout;