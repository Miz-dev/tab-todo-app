import React from "react";
import type { NextPage } from "next";
// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<>
			<h1 className="text-3xl font-bold underline bg-blue-400">Hello world!</h1>
			<div className="mx-auto prose lg:prose-xl">
				<h2>テスト</h2>
				<ul>
					<li className="line-clamp-2">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
						pariatur provident reiciendis ex rerum aperiam, veritatis deserunt?
						Voluptate dolore, sequi sed libero inventore rem mollitia ducimus
						ipsam optio, fuga a!
					</li>
					<li>テスト</li>
					<li>テスト</li>
				</ul>
			</div>
		</>
	);
};

export default Home;
