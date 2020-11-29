const nome = 'Nemésio'
const peso = 68
const altura = 1.83
const sexo = 'M'

let imc = peso / (altura * altura)

if (imc >= 30) {
    console.log(`${nome}, você está acima do peso`);
}
else {
      
    console.log(`${nome}, seu peso está ok`);
    }

    // para fazer comentarios no JS utilizamos o // (barra barra)


    // Construção e impressão de objeto

 const Empresa = {

        Nome: 'Faculdade iv2',
        Cor: 'Rosa',
        Foco: 'Programação',
        Endereço: {
            Rua: 'Avenida Paulista',
            Número: 1234
        }
    }
    console.log(`A empresa ${Empresa.Nome} está localizada em ${Empresa.Endereço.Rua}, ${Empresa.Endereço.Número}`);


    // Vetores ou Array
    
    const Desenvolvedor = {
        Nome: 'Nemésio',
        Idade: 26,

        Tecnologias: [
            {
                Nome: 'JavaScript',
                Especialidade: 'Web',
            },
            
            {
                Nome: 'Desenvolvimento Web',
                Especialidade: 'CSS'
            }
            ]
    }

    console.log(`O desenvolvedor ${Desenvolvedor.Nome} tem ${Desenvolvedor.Idade} anos e usa a tecnologia ${Desenvolvedor.Tecnologias[0].Nome} com especialidade em ${Desenvolvedor.Tecnologias[1].Especialidade}.`);