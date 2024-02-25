import { ReactNode } from 'react';
import Header from '@/components/organisms/Header.tsx';

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => (
    <div>
      <Header />
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

export default DefaultLayout;
