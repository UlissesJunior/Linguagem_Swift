import Navbar from "../components/Navbar";
import "../assets/styles/style.css";

function Docs() {
  return (
    <>
      <Navbar />
      <div className="banner"></div>{" "}
      <div className="container" style={{ flexDirection: "column", padding: "4vmin" }}>
        <h2>O que é a linguagem SWIFT?</h2>
        <p>
          Cada vez mais a linguagem Swift, desenvolvida pela Apple e apresentada
          na WWDC de 2014, vem sendo utilizada, muitas pessoas estão criando ou
          alterando seus projetos e aprendendo os pontos positivos dessa
          linguagem. <br />
          Segundo o site da própria Apple, em tradução livre: <br /> “Swift é
          uma linguagem de programação robusta e intuitiva criada pela Apple
          para a construção de aplicativos para iOS, Mac, Apple TV e Apple
          Watch. Ela foi projetada para oferecer mais liberdade do que nunca aos
          desenvolvedores. Swift é fácil de usar e de código aberto, então
          qualquer pessoa com uma ideia pode criar algo incrível.”
          <br /> Essa linguagem de programação possui uma tipagem forte,
          estática e inferida, isso é, os valores que são atribuídos a variáveis
          no Swift, devem ser do mesmo tipo da variável declarada, o tipo da
          variável é verificado e definido em tempo de compilação e os tipos de
          variáveis podem ser inferidos pelo compilador através dos valores
          passados na inicialização.
        </p>
        <h2>História</h2>
        <p>
          {" "}
          Antes de desenvolver a linguagem Swift em 2014 e torná-la uma das
          linguagens oficiais da Apple, a empresa já possuía uma linguagem de
          programação, o Objective-C, que é uma linguagem madura e estável e é
          compatível com o Swift, já que a criação da linguagem Swift foi
          inspirada no Objective-C, portanto, os códigos que forem criados no
          Objetive-C podem ser facilmente incorporados no Swift. <br />
          No entanto, se Apple já possuía uma linguagem de programação, qual a
          razão para desenvolver outra? Mesmo sendo uma linguagem diferente e
          moderna quando lançado, o Objective-C, não satisfaz as atuais
          linguagens, já que lhe faltam coisas como uma sintaxe limpa e
          interferência de tipo e o Swift apresenta melhoria nesses parâmetros.
          Ainda assim, não é possível dizer que o Objective-C não é uma
          linguagem de programação eficiente. <br />
          No entanto, após o lançamento do Swift, a comunidade de
          desenvolvedores passou a adotar essa linguagem para dispositivos iOS,
          por conta do grande número de desenvolvedores que adotaram e passaram
          a utilizar a linguagem, que foi possível um desenvolvimento rápido da
          mesma, tendo novas versões sendo lançadas a cada cinco ou seis meses.{" "}
          <br />
          Em consequência da recepção positiva da linguagem pela comunidade, o
          Swift ficou entre uma das 10 linguagens de programação mais populares
          do mundo em apenas 3 anos após o seu lançamento oficial, segundo o
          TIOBE Index e a RedMonk.{" "}
        </p>
        <h2>Características</h2>
        <p>
          Essa linguagem vem inovando de várias maneiras, mas temos uma bem
          peculiar ao criar constantes e variáveis. Por exemplo: ela permite
          criar variáveis com caracteres especiais incluindo o conteúdo delas, o
          que torna possível nomear uma variável ou constante com emoticons e
          outros caracteres. Além disso, traz vantagens tanto na forma de
          implementação como em padrões que Objective-C não apresenta. Falando
          em padrões, com Swift é possível implementar Generics, o que torna
          viável criar códigos mais flexíveis, como mostra o código da Listagem
          2, sendo possível achar um valor dentro de qualquer array.{" "}
        </p>
        <h2>Por que aprender? </h2>
        <p>
          A linguagem Swift é fácil de aprender, ela é parecida com algumas
          linguagens como Ruby e Python, mas não é só isso que a torna fácil e
          sim por que diferentemente da Objective-C, além de ter tipagem forte
          ela pode ser dinâmica, ou seja, você não precisa definir o tipo da
          variável, ele vai ser definido na primeira vez que a variável receber
          um valor. <br />
          Essa linguagem desenvolvida também pode se tornar mais uma opção para
          quem quiser aprender a usar o Cocoa framework, sendo assim, ele
          consegue coexistir com Objective-C. Você pode criar classes Swift em
          seu projeto Objective-C e fazer a comunicação entre eles sem ter que
          passar completamente seu projeto para Swift. <br />
          Esse framework contém funções que permitem os desenvolvedores desenhar
          imagens e textos na tela, respondendo a interação do usuário, dessa
          forma, quando você ouvir que precisa ainda aprender Objective-C para
          fazer aplicações para IOS, a maioria quer dizer que você precisa
          aprender como se usa o framework Cocoa Touch e com Swift você tem mais
          uma maneira de começar a usar esse framework. <br />
          Felizmente, para aprender essa linguagem você não precisa saber
          previamente Objective-C, porque o Swift é tão flexível que pode se
          adaptar à sua maneira de programar. Mas se você já programa em outra
          linguagem, a única dificuldade vai ser se adaptar aos novos padrões da
          sintaxe.{" "}
        </p>
        <h2>Vantagens e Desvantagens</h2>
        <h3>Simplicidade</h3>
        <p>
          Como muitos desenvolvedores reclamavam que a Objective-C (antes da
          criação da Swift) tem uma sintaxe complicada e difícil de debugar,
          esse é um dos problemas que a Swift veio resolver, pois ela é mais
          fácil e, segundo o site da própria Apple, “sua sintaxe é concisa, mas
          expressiva”. <br />
          A sintaxe da Swift é clara, limpa, eficiente e concisa, facilitando a
          vida dos desenvolvedores, que constroem aplicativos com menos
          codificação, e das pessoas que aprendem e/ou ensinam outras que querem
          ingressar no mundo da programação. <br />
          Pode-se ver de cara que a simplicidade foi chave na hora de projetar a
          linguagem. Tome como exemplo o famoso ponto e vírgula ao final de cada
          declaração. A Apple decidiu torná-lo opcional. Embora isso não seja
          extremamente relevante, mostra o esforço que eles tiveram para deixar
          a sintaxe o mais limpa possível. <br />{" "}
        </p>
        <h3>Modernidade e flexibilidade</h3>
        <p>
          A linguagem Swift proporciona diferentes conceitos modernos, como o
          type safe e o conceito de optionals, para tratar valores nulos. Sendo
          assim, ela não necessita do uso do ponto-e-vírgula (;) ao final de
          cada linha. <br />
          Outra característica disponível na linguagem, que pode ser
          extremamente útil, é o generics. No mundo corporativo, os generics
          foram primeiramente introduzidos em C#, e mais tarde em Java, depois
          de ter ganho muita força. Usar generics pode evitar as conversões
          entre tipos, pois permite que o compilador execute certas checagens de
          tipo geralmente não disponíveis em linguagens sem generics. <br />
        </p>
        <h3>Ótimo desempenho</h3>
        <p>
          A Swift possui uma performance rápida e eficiente, respondendo em
          tempo real e podendo ser aplicada junto a um código Objective-C já
          existente. Deste modo, os apps criados com a linguagem são rápidos,
          dinâmicos, oferecendo uma boa experiência aos seus usuários. <br />
          De acordo com dados da própria Apple, a Swift pode ser até 2,6x mais
          rápida que Objective-C e até 8,4x que a Python. <br />
        </p>
        <h3>Swift Playgrounds</h3>
        <p>
          Com o lançamento da Swift, a Apple aprimorou sua ferramenta de
          desenvolvimento chamada de Xcode adicionando uma parte Playground,
          onde o programador pode facilmente testar seu código sem precisar
          fazer o build ou compilar. <br />
          Além de mostrar o resultado imediatamente, ele mostra também os
          gráficos sobre a performance do código, neste caso há mais uma
          característica da linguagem que é a de poder ser interpretada. Poderá
          ser desenvolvida toda uma aplicação usando o Playground e testar
          protótipos com a finalidade de melhorar a implementação durante a fase
          de desenvolvimento do projeto. <br />
        </p>
        <h3>Limitação de sistema</h3>
        <p>
          A linguagem Swift funciona somente no campo Apple. Sabemos que os
          diferentes equipamentos da marca são caros, principalmente aqui no
          Brasil, então, se tornar um desenvolvedor iOS acaba necessitando de
          uma atenção em alguns investimentos. <br />
        </p>
        <h3>Quantidade de dispositivos</h3>
        <p>
          Sabe-se também que o Android, principal concorrente do iOS, possui uma
          quantidade muito maior de dispositivos vendidos no Brasil. No entanto,
          os produtos da Apple são verdadeiros objetos de desejo das pessoas e,
          mesmo com um público menor, ele se mantém fiel e tende a aumentar, com
          mais gente querendo investir e adentrar no mundo da Apple. <br />
        </p>
        <h2>Pacotes</h2>
        <h3>Swift-DocC</h3>
        <p>
          O compilador de documentação DocC converte texto baseado em Markdown
          em documentação rica para frameworks e pacotes Swift. Você pode
          visualizar a documentação em seu formulário publicado enquanto
          trabalha nela e também hospedá-la em um site quando estiver concluída.{" "}
          <br />
          A sintaxe DocC — chamada marcação de documentação — é uma variante
          personalizada do Markdown que adiciona funcionalidade para recursos de
          documentação específicos do desenvolvedor, como links de símbolos
          cruzados, listas de definição de termos, listagens de código e
          apartes. <br />
          Você adiciona marcação de documentação ao seu código-fonte, compila-o
          com DocC e produz documentação de referência para suas APIs. Você
          também pode usar a marcação de documentação, juntamente com um
          conjunto de diretivas que instruem como o DocC gera seu conteúdo, para
          oferecer tutoriais passo a passo que ensinam os desenvolvedores a usar
          suas APIs por meio de exercícios de codificação interativos. <br />
        </p>
        <h3>Diretrizes de design de API</h3>
        <p>
          A entrega de uma experiência de desenvolvedor clara e consistente ao
          escrever código Swift é amplamente definida pelos nomes e expressões
          idiomáticas que aparecem nas APIs. Essas diretrizes de design explicam
          como garantir que seu código pareça parte do ecossistema Swift maior.{" "}
          <br />
        </p>
        <h3>Ferramentas</h3>
        <h4>Gerenciador de Pacotes Swift</h4>
        <p>
          O Swift Package Manager é uma ferramenta para gerenciar a distribuição
          e uso de “pacotes” de código Swift. Ele é integrado ao sistema de
          compilação Swift para automatizar o processo de download, compilação e
          vinculação de dependências em produtos de destino. <br />
        </p>
        <h4>Diretrizes de migração</h4>
        <p>
          Para usuários do Xcode, há uma ferramenta de migração Swift incluída
          que ajuda você a mover seu projeto para a versão mais recente do Swift
          ou atualizá-lo para funcionar com os SDKs mais recentes. <br />
        </p>
        {/* <h3>Versões</h3>
        Tabela */}
        <h3>Suporte comercial</h3>
        <p>
          Swift pode ser usado em diferentes plataformas. As informações abaixo
          documentam o nível atual de suporte para cada plataforma. <br />
          Cada plataforma Swift é categorizada com base em duas categorias:
          <br />
          Implantação e desenvolvimento: os programas Swift podem ser criados
          para serem executados nessa plataforma e as ferramentas de
          desenvolvimento para Swift — como o compilador Swift — também são
          executadas nessa plataforma. <br />
          Somente implantação: os programas Swift podem ser criados para serem
          executados nessa plataforma, mas as próprias ferramentas de
          desenvolvimento que criam esses programas podem não ser executadas
          nessa plataforma.
        </p>
        <h3>Implantação e Desenvolvimento</h3>
        <p>
          Estas são as plataformas você pode segmentar quando as ferramentas são
          usadas em uma determinada plataforma. Por exemplo, as ferramentas no
          macOS podem criar aplicativos Swift que são executados no iOS.
        </p>
        {/* Tabela */}
        <p>
          O suporte para desenvolvimento e execução de aplicativos Swift em
          várias plataformas é suportado por diferentes membros da comunidade de
          código aberto Swift. Cada plataforma tem um campeão, chamado
          proprietário da plataforma, que atua como o principal responsável pela
          manutenção do suporte para uma determinada plataforma. <br />
          Os proprietários de plataforma ajudam os colaboradores do projeto
          Swift a colaborar e continuar trabalhando para o progresso de uma
          determinada plataforma. Esses indivíduos também seriam capazes de
          orientar a portabilidade de alterações específicas na plataforma. Os
          proprietários da plataforma têm seções em forums.swift.org e se reúnem
          quinzenalmente para discutir desenvolvimento ativo e problemas em
          aberto na plataforma.
        </p>
        <h3>Bibliografia</h3>
        <p>
          <a href="https://www.infoq.com/articles/apple-swift/?itm_source=infoq&itm_campaign=user_page&itm_medium=link">
            InfoQ
          </a>
        </p>
        <p>
          <a href="https://www.zup.com.br/blog/swift-linguagem-de-programacao-ios">
            Swift: conheça a linguagem de programação do iOS
          </a>
        </p>
        <p>
          <a href="https://blog.geekhunter.com.br/desenvolvimento-ios-com-swift/">
            Desenvolvimento iOS com Swift: tudo para você começar do jeito
            certo!
          </a>
        </p>
        <p>
          <a href="https://www.swift.org/">Sobre o Swift</a>
        </p>
      </div>
    </>
  );
}

export default Docs;
