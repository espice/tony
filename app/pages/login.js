import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Content from "../modules/Login";

export default function Login() {
  return (
    <Layout page={{ title: "Login" }}>
      <Content />
    </Layout>
  );
}
