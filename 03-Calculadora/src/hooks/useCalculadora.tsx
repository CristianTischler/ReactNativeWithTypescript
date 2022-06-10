import { useRef, useState } from 'react';

enum Operadores {
    sumar,
    restar,
    multiplicar,
    dividir,
  }

export const useCalculadora = () => {

  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('0');
  const ultimaOperacion = useRef<Operadores>();

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };
  const armarNumero = (numeroTexto: string) => {
    //No acepto doble punto
    if (numeroTexto === '.' && numero.includes('.')) {return;}

    //No acepto doble 0
    if (numero.startsWith('0') || numero.startsWith('-0')){

      //punto decimal
      if (numeroTexto === '.'){
        setNumero(numero + numeroTexto);

        //Evaluar si es otro cero y hay un punto
      } else if ( numeroTexto === '0' && numero.includes('.')){
        setNumero(numero + numeroTexto);

        //Evaluar si es diferente de cero y no tiene un punto
      } else if ( numeroTexto !== '0' && !numero.includes('.')){
        setNumero(numeroTexto);

        //Evitar 0000.0
      } else if (numeroTexto === '0' && !numero.includes('.')){
        setNumero(numero);
      } else {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };
  const positivoNegativo = () => {
    if (numero !== 'Math Error'){
      if (numero.includes('-')) {
        setNumero(numero.replace('-', ''));
      } else {
        setNumero('-' + numero);
      }
    }
  };
  const btnDelete = () => {
    if (numero !== 'Math Error'){
      let negativo = '';
      let numeroTemp = numero;
      if (numero.includes('-')){
        negativo = '-';
        numeroTemp = numero.substr(1);
      }

      if (numeroTemp.length > 1) {
        setNumero(negativo + numeroTemp.slice(0, -1));
      } else {
        setNumero('0');
      }
    } else {
      setNumero('0');
    }
  };
  const cambiarNumPorAneterior = () => {
    if (numero.endsWith('.')){
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };
  const btnDividir = () => {
    if (numero !== 'Math Error'){
      cambiarNumPorAneterior();
      ultimaOperacion.current = Operadores.dividir;
    }
  };
  const btnMultiplicar = () => {
    if (numero !== 'Math Error'){
      cambiarNumPorAneterior();
      ultimaOperacion.current = Operadores.multiplicar;
    }
  };
  const btnRestar = () => {
    if (numero !== 'Math Error'){
      cambiarNumPorAneterior();
      ultimaOperacion.current = Operadores.restar;
    }
  };
  const btnSumar = () => {
    if (numero !== 'Math Error'){
      cambiarNumPorAneterior();
      ultimaOperacion.current = Operadores.sumar;
    }
  };
  const calcular = () => {
    if (numero !== 'Math Error'){
      const num1 = Number(numero);
      const num2 = Number(numeroAnterior);

      if (num1 === 0 && num2 === 0){
        setNumero('0');
      } else {
        switch (ultimaOperacion.current) {
          case Operadores.sumar:
            setNumero(String(num1 + num2));
            break;
         case Operadores.restar:
            setNumero(String(num2 - num1));
            break;
          case Operadores.multiplicar:
            setNumero(String(num1 * num2));
            break;
          case Operadores.dividir:
            if (num1 === 0){
              setNumero('Math Error');
            } else {
              setNumero(String(num2 / num1));
            }
            break;
        }

      }
    }
    setNumeroAnterior('0');
  };

  return {
      armarNumero,
      positivoNegativo,
      btnDelete,
      btnDividir,
      btnMultiplicar,
      btnRestar,
      btnSumar,
      calcular,
      limpiar,
      numero,
      numeroAnterior,
    };
};
