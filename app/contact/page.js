'use client';

import React from 'react';
import { useState } from "react";
import Header from "../_components/header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    alert("Obrigado por entrar em contato! Responderemos em breve.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Header />
      <div className="text-yellow-400 bg-black">
        <div className="container mx-auto pt-40 ">
          <section className="py-12 px-6 lg:px-32">
            <div className="max-w-4xl mx-auto border text-purple-950 bg-yellow-400  rounded-lg p-8">
              <h1 className="text-3xl font-bold mb-6 text-center">
                Entre em Contato
              </h1>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium">
                    Nome
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    className="placeholder:text-purple-950/50"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="seuemail@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="placeholder:text-purple-950/50"
                    required
                  />
                </div>
                {/* Mensagem */}
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium ">
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Sua mensagem"
                    value={formData.message}
                    onChange={handleChange}
                    className="placeholder:text-purple-950/50"
                    rows="5"
                    required
                  ></Textarea>
                </div>
                {/* Botão de Enviar */}
                <div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-yellow-400 bg-purple-950"
                  >
                    Enviar
                  </Button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}