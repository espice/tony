import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Content from '../modules/Dashboard';

export default function Home() {
  return (
    <Layout page={{ title: 'Dashboard' }}>
      <Content />
    </Layout>
  );
}
