import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Content from '../modules/Profile';

export default function Login() {
  return (
    <Layout page={{ title: 'Profile' }}>
      <Content />
    </Layout>
  );
}
