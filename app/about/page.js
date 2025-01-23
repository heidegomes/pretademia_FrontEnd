'use client';

import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Header from '../_components/header';

export default function About() {
  return (
      <>
      <Header />
      <div className="text-yellow-400 bg-black">
        <div className="container mx-auto pt-40 ">
          <div className='border rounded-lg shadow-md text-purple-950 bg-yellow-400 m-4'>

          
          <h1 className="text-4xl font-bold mt-4 text-center">
            Sobre Nós
          </h1>

          <p className="prose-lg text-justify m-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis erat quis justo venenatis eleifend. Nam dui justo, sagittis quis risus at, porttitor pharetra urna. Phasellus maximus venenatis sapien luctus tincidunt. Duis et diam sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In dignissim, est at ultricies dignissim, justo risus iaculis nulla, non viverra turpis nibh eu quam. Donec quis tortor rutrum, hendrerit nulla ut, consectetur neque. Fusce lacinia mauris sed urna hendrerit, non facilisis tortor iaculis. Aliquam nec metus massa. Aliquam fermentum sapien augue, sed mattis odio pharetra pharetra. Vivamus in condimentum mi, et interdum lectus. Nunc sollicitudin elementum purus, sit amet commodo est volutpat quis. Nullam euismod feugiat est lobortis commodo.
          </p>


        </div>
        </div>
      </div>
      </>
  );
}