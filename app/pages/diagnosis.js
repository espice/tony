import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Content from '../modules/Diagnosis';

export default function Login() {
  return (
    <Layout page={{ title: 'Self Diagnosis' }}>
      <Content />
    </Layout>
  );
}
