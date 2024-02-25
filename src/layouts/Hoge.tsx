import { ReactNode } from 'react';

interface HogeLayoutProps {
  children: ReactNode;
}

const HogeLayout = ({ children }: HogeLayoutProps) => (
    <div>
      <header>
        {/* ヘッダーのコンテンツ */}
        <h1>Hoge Header</h1>
      </header>
      <main>
        {/* ページコンポーネント */}
        {children}
      </main>
      <footer>
        {/* フッターのコンテンツ */}
        <h1>Hoge Footer</h1>
      </footer>
    </div>
);

export default HogeLayout;
