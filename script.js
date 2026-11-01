(function () {
  "use strict";

  /* ============ CONTEÚDO: 21 DEVOCIONAIS ============ */
  const WEEKS = [
    "Semana 1 — Aproximando-se de Deus",
    "Semana 2 — Fortalecendo sua fé",
    "Semana 3 — Vivendo na presença de Deus"
  ];

  const DAYS = [
    { t: "Reserve um tempo para Deus", th: "Intimidade",
      ref: "Mateus 6:6",
      v: "Mas tu, quando orares, entra no teu aposento e, fechada a porta, ora a teu Pai que está em secreto; e teu Pai, que vê em secreto, te recompensará publicamente.",
      ex: "Jesus ensina que a oração mais verdadeira nasce no lugar escondido, longe de plateias. O aposento representa qualquer espaço onde você fica a sós com o Pai, sem pressa de ser visto.",
      re: "Tempo é o recurso que mais revela o que valorizamos. Costumamos entregar a Deus o que sobra do dia, e o que sobra raramente é o melhor. Reservar um horário para Ele não é cumprir uma regra: é dizer, com atitudes, que a Sua presença importa mais do que o barulho ao redor. O Pai que vê em secreto não procura discursos bonitos; Ele procura você, inteiro e disponível. Quando o encontro se torna hábito, a vida inteira começa a se organizar em torno dele.",
      ap: "Escolha um horário fixo, de 10 a 15 minutos, e um lugar silencioso. Deixe o celular em outro cômodo e comece com um minuto de silêncio.",
      q: "O que costuma ocupar o lugar que deveria ser reservado para Deus no meu dia?",
      pr: "Pai, muitas vezes corro de um compromisso a outro e deixo o Senhor para depois. Hoje escolho Te colocar em primeiro lugar. Ensina-me a amar o silêncio da Tua presença e a voltar a esse lugar todos os dias. Em nome de Jesus, amém.",
      ch: "Separe 10 minutos sem telas para ficar a sós com Deus e escreva em uma frase como foi." },

    { t: "Aprenda a ouvir a voz de Deus", th: "Sensibilidade espiritual",
      ref: "João 10:27",
      v: "As minhas ovelhas ouvem a minha voz, e eu conheço-as, e elas me seguem.",
      ex: "Jesus se apresenta como o Pastor cujas ovelhas reconhecem a voz. Esse reconhecimento não vem de um dom raro, mas de convivência: quem anda perto aprende o timbre.",
      re: "Deus fala de muitas formas, mas a Escritura é a referência que testa todas elas. Ouvir exige quietude interior, e a nossa mente costuma estar cheia de ruídos: pressa, opiniões, medos. Ouvir também exige disposição para obedecer; quem pede direção já decidido a não mudar de rota raramente escuta. Aos poucos, a voz do Pastor se torna familiar: ela convence sem humilhar, orienta sem confundir e sempre conduz para mais perto de Cristo.",
      ap: "Ao orar, reserve os últimos minutos apenas para ouvir. Leia um trecho curto da Bíblia e anote o que mais chamou a sua atenção.",
      q: "Em que área da vida Deus já falou ao meu coração e eu ainda não obedeci?",
      pr: "Senhor, afina os meus ouvidos para a Tua voz. Silencia o que me distrai e dá-me coragem para obedecer ao que me mostrares. Quero seguir-Te como a ovelha que conhece o seu Pastor. Amém.",
      ch: "Faça 5 minutos de silêncio diante de Deus e anote o que vier à mente à luz da Palavra." },

    { t: "A importância da oração", th: "Comunhão com o Pai",
      ref: "Filipenses 4:6",
      v: "Não estejais inquietos por coisa alguma; antes as vossas petições sejam em tudo conhecidas diante de Deus pela oração e súplicas, com ação de graças.",
      ex: "Paulo convida a trocar a inquietação pela oração. Note o equilíbrio: pedir com sinceridade e agradecer ao mesmo tempo, confiando que o Pai ouve.",
      re: "Orar não é informar a Deus o que Ele não sabe, nem convencê-Lo a nos amar. É alinhar o nosso coração com o Dele. A oração muda quem ora: o medo encontra um lugar para ser colocado, o desejo é purificado, a gratidão nasce. Muitos desistem por achar que precisam de palavras perfeitas, mas o Pai prefere a conversa honesta de um filho à retórica de um estranho. Orar com frequência é como respirar: simples, necessário e silenciosamente vital.",
      ap: "Crie um roteiro simples: agradecer, confessar, pedir e interceder. Dedique alguns minutos a cada parte.",
      q: "A minha oração é mais uma lista de pedidos ou uma conversa com o Pai?",
      pr: "Pai amado, ensina-me a orar. Tira de mim a ideia de que preciso de palavras bonitas e ajuda-me a falar contigo com sinceridade. Que a oração seja o meu refúgio diário. Amém.",
      ch: "Ore hoje por uma pessoa específica e, se possível, avise-a de que está orando por ela." },

    { t: "Confie seus caminhos ao Senhor", th: "Confiança",
      ref: "Provérbios 3:5-6",
      v: "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas.",
      ex: "O texto contrasta dois apoios: o coração entregue a Deus e o entendimento próprio. Reconhecer o Senhor em todos os caminhos significa incluí-Lo nas decisões grandes e pequenas.",
      re: "Confiar não significa parar de pensar; significa recusar que a nossa visão limitada tenha a última palavra. Planejamos, mas sabemos pouco do amanhã. Quando entregamos nossos planos, não perdemos o controle de algo que nunca tivemos: ganhamos um guia que enxerga o caminho inteiro. A promessa não é um trajeto sem curvas, e sim veredas endireitadas, isto é, direção segura mesmo quando o cenário muda.",
      ap: "Antes de uma decisão importante desta semana, pare, ore e pergunte: o que a Palavra diz sobre isso?",
      q: "Qual decisão estou tentando carregar sozinho, sem consultar o Senhor?",
      pr: "Senhor, entrego-Te meus planos, minhas dúvidas e meu futuro. Reconheço que Tu vês o que eu não vejo. Endireita as minhas veredas e dá-me paz para caminhar confiante. Amém.",
      ch: "Escreva uma decisão que te preocupa e entregue-a a Deus em oração, por escrito." },

    { t: "Busque a presença de Deus", th: "Busca sincera",
      ref: "Jeremias 29:13",
      v: "E buscar-me-eis, e me achareis, quando me buscardes de todo o vosso coração.",
      ex: "A promessa dada ao povo no exílio mostra que Deus se deixa encontrar por quem o procura com inteireza. O 'todo o coração' indica uma busca sem reservas.",
      re: "Buscar a Deus é diferente de buscar o que Ele pode dar. Quem busca apenas benefícios logo se cansa; quem busca o próprio Deus descobre que a presença é a recompensa. A busca sincera é persistente: continua nos dias áridos, quando os sentimentos se calam. E a promessa permanece firme: quem procura, acha. Muitas vezes, aliás, percebemos que Ele já estava perto, esperando apenas que levantássemos os olhos.",
      ap: "Transforme um momento comum do dia, como o caminho para o trabalho, em tempo de adoração, com um cântico ou uma oração curta.",
      q: "Estou buscando o Deus que dá ou o Deus que é? Que diferença isso faz na minha prática?",
      pr: "Deus meu, quero Te buscar de todo o coração, não só pelo que fazes, mas por quem és. Quando eu me distrair, chama-me de volta. Que eu Te encontre e permaneça. Amém.",
      ch: "Dedique 10 minutos a adorar sem pedir nada, apenas agradecendo e exaltando quem Deus é." },

    { t: "Entregue suas preocupações", th: "Descanso na confiança",
      ref: "1 Pedro 5:7",
      v: "Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.",
      ex: "Pedro usa a imagem de lançar: atirar o peso para fora de si e deixá-lo nas mãos de Outro. A razão é afetuosa: Deus cuida de nós.",
      re: "A ansiedade promete proteção, mas cobra juros altos: rouba o sono, a alegria e a presença no momento. Lançar a preocupação é um ato repetido, não único; sempre que ela volta, voltamos a entregá-la. Isso não é negligência com as responsabilidades, mas a convicção de que há um Pai maior que o problema. Descansar nEle libera a mente para fazer o que cabe a nós, com leveza e sem desespero.",
      ap: "Escreva suas três maiores preocupações. Ao lado de cada uma, anote a pequena ação que está ao seu alcance e entregue o resto em oração.",
      q: "Que preocupação eu venho alimentando e preciso, de fato, entregar a Deus?",
      pr: "Pai, hoje deposito aos Teus pés cada ansiedade que tem pesado em meu coração. Cuida do que eu não consigo controlar e ensina-me a descansar no Teu cuidado. Amém.",
      ch: "Toda vez que uma preocupação surgir hoje, diga em voz baixa: “Senhor, eu a entrego a Ti”." },

    { t: "Desenvolva um coração agradecido", th: "Gratidão",
      ref: "1 Tessalonicenses 5:18",
      v: "Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.",
      ex: "Paulo não diz para agradecer por tudo, mas em tudo: em cada circunstância há motivo para reconhecer a fidelidade de Deus. E afirma que isso é vontade Dele.",
      re: "A gratidão muda o foco do que falta para o que já foi dado. Ela não nega a dor; impede que a dor seja a única voz. Quem agradece com regularidade treina os olhos para ver cuidado onde antes via acaso. Ao fim da primeira semana, olhe para trás: mesmo os pequenos sinais de graça merecem registro. O coração agradecido torna-se mais manso, mais generoso e mais próximo de Deus.",
      ap: "Monte uma lista de 10 motivos de gratidão, incluindo coisas simples como saúde, um amigo ou um prato de comida.",
      q: "Que bênção do dia a dia eu tenho tratado como algo garantido?",
      pr: "Senhor, obrigado pela vida, pelo pão, pelas pessoas que colocaste ao meu lado e pela Tua fidelidade. Livra-me da queixa e enche-me de um coração grato. Amém.",
      ch: "Agradeça pessoalmente a alguém que fez diferença na sua vida, por mensagem ou ligação." },

    { t: "Confie mesmo sem entender", th: "Fé",
      ref: "Hebreus 11:1",
      v: "Ora, a fé é o firme fundamento das coisas que se esperam, e a prova das coisas que se não veem.",
      ex: "Hebreus define fé como certeza do que se espera e convicção do que não se vê. É confiança baseada no caráter de Deus, não na clareza das circunstâncias.",
      re: "Há capítulos da vida que não fazem sentido na hora. Abraão saiu sem saber para onde ia; José esperou anos num poço e numa prisão. A fé não elimina as perguntas, mas as coloca sob a luz de quem Deus é: fiel, bom e soberano. Confiar sem entender é admitir que a nossa compreensão é pequena e a Sua sabedoria, vasta. Muitas vezes, o sentido só aparece quando olhamos para trás.",
      ap: "Identifique uma situação que você não compreende. Ore dizendo “não entendo, mas confio” e repita sempre que a dúvida surgir.",
      q: "O que eu preciso aceitar não entender para poder descansar em Deus?",
      pr: "Senhor, há coisas que não compreendo, mas escolho confiar em Ti. Fortalece a minha fé quando as respostas demorarem e lembra-me de que Tu és bom. Amém.",
      ch: "Relembre um momento em que Deus agiu quando você não via saída e escreva esse testemunho em poucas linhas." },

    { t: "Encontre força na Palavra", th: "As Escrituras",
      ref: "Salmos 119:105",
      v: "Lâmpada para os meus pés é tua palavra, e luz para o meu caminho.",
      ex: "O salmista compara a Palavra a uma lâmpada: ela não ilumina o mapa inteiro, mas o passo seguinte. É luz para caminhar, não só para contemplar.",
      re: "Quem caminha à noite com uma lanterna não vê o fim da estrada, mas vê onde pisar. Assim é a Palavra: orienta decisões concretas, corrige rotas e consola em dias escuros. A força que ela dá não vem da quantidade lida, mas da meditação e da obediência. Um versículo guardado no coração pode sustentar uma semana inteira. Ler com atenção, devagar e com oração faz toda a diferença.",
      ap: "Escolha o versículo da semana, copie-o em um cartão e leia-o três vezes ao dia: manhã, tarde e noite.",
      q: "Qual passo da minha vida hoje precisa da luz da Palavra?",
      pr: "Pai, que a Tua Palavra seja lâmpada para os meus pés. Dá-me fome das Escrituras e humildade para obedecer ao que elas me ensinam. Amém.",
      ch: "Memorize o versículo de hoje e recite-o antes de dormir." },

    { t: "Aprenda a esperar em Deus", th: "Paciência",
      ref: "Salmos 27:14",
      v: "Espera no Senhor, anima-te, e ele fortalecerá o teu coração; espera, pois, no Senhor.",
      ex: "O salmista repete duas vezes: espera no Senhor. A espera bíblica é ativa, feita de confiança e perseverança, e vem acompanhada da promessa de fortalecimento.",
      re: "Vivemos a era da pressa, mas Deus trabalha com tempo próprio. Esperar não é perder tempo; é ser formado enquanto a resposta não chega. Na espera, o caráter amadurece, a dependência aumenta e a vontade de Deus se torna mais valiosa do que o nosso cronograma. A demora não é negação. O Senhor que prometeu também sabe a hora certa de cumprir.",
      ap: "Em vez de forçar uma saída, use a espera para servir, aprender ou orar por alguém. Ocupe o tempo com algo que honre a Deus.",
      q: "Que promessa de Deus estou tentando antecipar por impaciência?",
      pr: "Senhor, ensina-me a esperar sem desanimar. Fortalece o meu coração enquanto a resposta não vem e ajuda-me a confiar no Teu tempo. Amém.",
      ch: "Escolha algo em que você está impaciente e ore: “Seja feita a Tua vontade, no Teu tempo”." },

    { t: "Vença o medo pela fé", th: "Coragem",
      ref: "Isaías 41:10",
      v: "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça.",
      ex: "A ordem “não temas” vem acompanhada de razões: Deus está com você, é o seu Deus e promete fortalecer, ajudar e sustentar.",
      re: "O medo é natural; o problema é deixá-lo dirigir a vida. A Bíblia não diz que não haverá motivos para temer, mas que a presença de Deus é maior que eles. Coragem não é ausência de medo, é caminhar com Deus apesar dele. Cada vez que damos um passo de obediência com o coração trêmulo, aprendemos que a mão que nos sustenta é firme. O medo diminui quando o olhar se fixa em Quem está conosco.",
      ap: "Dê nome ao seu maior medo e declare em voz alta a promessa de hoje sobre ele. Depois, dê um pequeno passo na direção oposta.",
      q: "Que decisão eu tenho adiado por medo e que Deus talvez esteja me chamando a tomar?",
      pr: "Pai, Tu és comigo, e isso me basta. Quando o medo apertar, lembra-me da Tua mão. Dá-me coragem para dar o próximo passo com fé. Amém.",
      ch: "Faça hoje uma coisa pequena que você vem evitando por medo, orando antes." },

    { t: "O poder do perdão", th: "Perdão e liberdade",
      ref: "Colossenses 3:13",
      v: "Suportando-vos uns aos outros, e perdoando-vos uns aos outros, se alguém tiver queixa contra outro; como Cristo vos perdoou, assim fazei vós também.",
      ex: "Paulo liga o nosso perdão ao perdão que recebemos. A medida é Cristo: perdoamos porque fomos perdoados.",
      re: "Guardar mágoa é beber veneno esperando que o outro adoeça. O perdão não declara que o erro foi pequeno, nem exige reconciliação imediata quando há risco; é a decisão de entregar a dívida nas mãos de Deus e soltar o peso. Perdoar é processo, às vezes repetido muitas vezes. Quando contemplamos a cruz, percebemos quanto nos foi perdoado, e a nossa dureza começa a ceder. O perdão liberta primeiro quem perdoa.",
      ap: "Escreva o nome de quem te feriu e ore por essa pessoa por alguns minutos, declarando: “eu a perdoo e a entrego a Deus”. Se for seguro, considere conversar.",
      q: "Que mágoa eu venho guardando e já passou da hora de entregar a Deus?",
      pr: "Senhor Jesus, obrigado por me perdoares tanto. Ajuda-me a perdoar quem me feriu, mesmo quando o sentimento ainda dói. Cura o meu coração e liberta-me de toda amargura. Amém.",
      ch: "Ore por alguém que te magoou, pedindo a Deus que o abençoe." },

    { t: "Permaneça firme nas dificuldades", th: "Perseverança",
      ref: "1 Coríntios 15:58",
      v: "Portanto, meus amados irmãos, estai firmes e constantes, sempre abundantes na obra do Senhor, sabendo que o vosso trabalho não é vão no Senhor.",
      ex: "Paulo conclui o grande capítulo sobre a ressurreição com uma exortação prática: se Cristo ressuscitou, nada feito para Ele é em vão.",
      re: "As dificuldades testam o que construímos. Nem toda tempestade é castigo; muitas vezes é o terreno onde as raízes se aprofundam. Estar firme não significa não sentir o abalo, mas não abandonar o fundamento. A esperança da ressurreição nos ensina que a última palavra não pertence à dor, e que cada gesto de fidelidade, mesmo invisível, tem valor eterno. Persevere: a colheita vem.",
      ap: "Em meio à dificuldade, mantenha três hábitos mínimos: oração, leitura bíblica curta e conversa com alguém de confiança.",
      q: "O que me faz querer desistir e que verdade da Palavra posso colocar diante disso?",
      pr: "Senhor, sustenta-me quando eu me sentir cansado. Firma os meus pés na rocha e lembra-me de que nenhum esforço feito por Ti é em vão. Amém.",
      ch: "Envie uma mensagem de ânimo a alguém que está passando por uma luta e ore por essa pessoa." },

    { t: "Deus renova suas forças", th: "Renovo e descanso",
      ref: "Isaías 40:31",
      v: "Mas os que esperam no Senhor renovarão as forças, subirão com asas como águias; correrão, e não se cansarão; caminharão, e não se fatigarão.",
      ex: "Isaías fala a um povo cansado no exílio. A promessa de renovo é para quem espera no Senhor, não para quem confia só em si.",
      re: "O esgotamento é comum, no corpo e na alma. O profeta mostra que até os jovens se cansam e que a força duradoura vem de outra fonte. A renovação raramente chega como um impulso espetacular; costuma vir como fôlego para o próximo passo: voar, correr e, sobretudo, caminhar sem fadiga. Deus restaura quem se aproxima dEle em vez de esconder o cansaço. Na metade da jornada, é um bom momento para descansar nEle.",
      ap: "Reserve hoje um tempo real de descanso: durma melhor, caminhe ao ar livre ou fique em silêncio com Deus, sem culpa.",
      q: "Onde eu tenho tentado seguir com as minhas próprias forças, sem buscar o renovo de Deus?",
      pr: "Pai, estou cansado em algumas áreas e preciso do Teu renovo. Restaura a minha alma, fortalece o meu corpo e devolve-me a alegria de caminhar contigo. Amém.",
      ch: "Faça uma pausa intencional de 15 minutos e, nela, apenas agradeça a Deus por te sustentar até aqui." },

    { t: "Uma vida guiada por Deus", th: "Direção divina",
      ref: "Salmos 32:8",
      v: "Instruir-te-ei, e ensinar-te-ei o caminho que deves seguir; guiar-te-ei com os meus olhos.",
      ex: "Aqui é o próprio Deus quem fala: promete instruir, ensinar e guiar. O olhar conduz com intimidade, sem rédeas, como quem orienta alguém que está atento.",
      re: "Ser guiado não é receber um mapa completo, mas manter o coração atento ao olhar de Deus. Quem anda perto percebe os sinais mais sutis; quem anda distante precisa de gritos. Em tempos de decisão, a Palavra, a oração, o conselho sábio e a paz de Cristo se somam como confirmações. A direção de Deus costuma levar à humildade, ao amor e à verdade. Viver guiado é viver acompanhado.",
      ap: "Antes de começar o dia, entregue a sua agenda a Deus e peça sensibilidade para perceber oportunidades de servir.",
      q: "Estou perto o bastante de Deus para perceber a Sua direção?",
      pr: "Senhor, guia-me com os Teus olhos. Que eu esteja tão perto que perceba o mínimo gesto Teu e tão humilde que obedeça sem demora. Amém.",
      ch: "Pela manhã, pergunte a Deus: “O que queres de mim hoje?” e anote a resposta à noite." },

    { t: "Pratique o amor ao próximo", th: "Amor em ação",
      ref: "João 13:34",
      v: "Um novo mandamento vos dou: Que vos ameis uns aos outros; como eu vos amei a vós, que também vós uns aos outros vos ameis.",
      ex: "Jesus chama de novo mandamento amar como Ele amou: com sacrifício, serviço e perdão. O padrão não é o nosso jeito, é o Dele.",
      re: "É fácil amar quem nos ama. O amor de Cristo desce à toalha e à bacia: serve, escuta, perdoa e permanece. Amar o próximo é decisão diária, não sentimento ocasional. Começa por ações simples: tempo, atenção, palavras gentis. É por esse amor que o mundo reconhece os discípulos de Jesus, e ele se torna a melhor pregação. Quando amamos, deixamos o caráter de Cristo visível.",
      ap: "Identifique alguém próximo que precisa de atenção: visite, ligue ou escute sem pressa e sem julgar.",
      q: "A quem Deus colocou ao meu lado e eu tenho amado de forma superficial?",
      pr: "Jesus, ensina-me a amar como Tu amaste. Tira de mim o egoísmo e abre os meus olhos para as necessidades ao meu redor. Que o meu amor seja real e concreto. Amém.",
      ch: "Pratique hoje um ato de bondade anônimo, sem esperar reconhecimento." },

    { t: "Desenvolva um coração humilde", th: "Humildade",
      ref: "Tiago 4:10",
      v: "Humilhai-vos perante o Senhor, e ele vos exaltará.",
      ex: "Tiago ensina que a humildade diante de Deus precede a elevação. O verbo humilhar-se é voluntário: nós o escolhemos, e Ele exalta.",
      re: "Humildade não é pensar mal de si, é pensar menos em si. Ela reconhece que tudo recebemos de Deus e que dependemos dEle. O orgulho se disfarça de autossuficiência, de necessidade de ter razão ou de comparação. O humilde aprende, pede ajuda, reconhece erros e valoriza os outros. Jesus, sendo Senhor, lavou os pés dos discípulos. Quem se coloca sob a mão de Deus encontra descanso, não derrota.",
      ap: "Hoje, reconheça um erro, peça desculpas ou peça ajuda em algo. Numa conversa, escolha ouvir mais do que falar.",
      q: "Em que situação o meu orgulho tem falado mais alto do que a minha fé?",
      pr: "Pai, quebranta o meu orgulho e ensina-me a viver com humildade. Que eu valorize os outros, reconheça as minhas falhas e dependa de Ti em tudo. Amém.",
      ch: "Faça um serviço silencioso hoje, algo que ninguém perceba que foi você." },

    { t: "Viva com propósito", th: "Propósito",
      ref: "Efésios 2:10",
      v: "Porque somos feitura sua, criados em Cristo Jesus para as boas obras, as quais Deus preparou para que andássemos nelas.",
      ex: "Paulo diz que somos feitura de Deus, criados em Cristo para boas obras já preparadas. O propósito nasce da identidade: primeiro quem somos nEle, depois o que fazemos.",
      re: "Propósito não é um cargo grandioso, mas viver cada papel (filho, pai, profissional, amigo) com a consciência de que Deus nos colocou ali. As boas obras não nos salvam; são fruto de quem foi salvo. Há tarefas que Deus preparou antes de nascermos, e elas se revelam passo a passo. Quem serve com fidelidade no pequeno descobre o maior. A sua vida tem valor, direção e um Autor.",
      ap: "Liste três áreas em que você pode servir com seus dons: família, trabalho, igreja. Escolha uma ação para esta semana.",
      q: "Que dons e oportunidades Deus me deu que ainda não coloquei a serviço dos outros?",
      pr: "Senhor, obrigado por me criares com intenção. Mostra-me as obras que preparaste para mim e dá-me disposição para cumpri-las com fidelidade e alegria. Amém.",
      ch: "Escreva uma frase sobre o propósito que você entende que Deus tem para a sua vida neste momento." },

    { t: "Cultive a paz interior", th: "Paz de Cristo",
      ref: "João 14:27",
      v: "Deixo-vos a paz, a minha paz vos dou; não vo-la dou como o mundo a dá. Não se turbe o vosso coração, nem se atemorize.",
      ex: "Jesus entrega a paz aos discípulos aflitos pouco antes da cruz. É uma paz diferente da do mundo: não depende das circunstâncias, vem da Sua presença.",
      re: "O mundo oferece paz como ausência de problema; Cristo oferece paz no meio dele. Ela é um dom, não uma conquista, e a cultivamos recebendo: pela oração, pela Palavra e pela entrega. A paz guarda o coração como uma sentinela, impedindo que o tumulto de fora tome conta do interior. Quando a mente se agita, voltamos à Sua promessa: não se turbe o vosso coração. Paz é viver sob o olhar de Quem governa a tempestade.",
      ap: "Quando sentir agitação hoje, respire fundo e repita lentamente o versículo, três vezes, em oração.",
      q: "De onde tenho tentado tirar uma paz que somente Cristo pode dar?",
      pr: "Jesus, dá-me a Tua paz. Acalma a minha mente, guarda o meu coração e ensina-me a descansar na Tua presença, mesmo em meio às tempestades. Amém.",
      ch: "Desligue as notificações por uma hora e passe esse tempo em silêncio e oração." },

    { t: "Permaneça perto de Jesus", th: "Comunhão contínua",
      ref: "João 15:5",
      v: "Eu sou a videira, vós as varas; quem está em mim, e eu nele, esse dá muito fruto; porque sem mim nada podeis fazer.",
      ex: "Jesus usa a imagem da videira: Ele é a fonte e nós somos os ramos. Permanecer significa viver ligado, dependente e em comunhão contínua.",
      re: "O ramo não se esforça para dar fruto; ele permanece na videira. O fruto é consequência da ligação. Quando tentamos produzir sozinhos, secamos; quando permanecemos, a vida flui. Permanecer é cultivar hábitos simples e constantes: oração, Palavra, obediência e comunhão. Não é um evento, é um jeito de viver. Ao fim da jornada, a pergunta mais importante é: como continuar ligado a Jesus todos os dias?",
      ap: "Defina um ritmo sustentável (horário, lugar e duração) para o seu tempo com Deus nos próximos 30 dias.",
      q: "O que preciso cortar ou acrescentar para permanecer em Cristo de forma constante?",
      pr: "Jesus, Tu és a videira, eu sou o ramo. Livra-me da tentação de viver por conta própria. Mantém-me ligado a Ti e faz a minha vida dar fruto que Te glorifique. Amém.",
      ch: "Escreva o seu compromisso de permanência: o que você fará diariamente para continuar perto de Jesus." },

    { t: "Continue sua caminhada com Deus", th: "Perseverança e esperança",
      ref: "Filipenses 1:6",
      v: "Tendo por certo isto mesmo: que aquele que em vós começou a boa obra a aperfeiçoará até ao dia de Jesus Cristo.",
      ex: "Paulo expressa a confiança de que Deus completará o que começou. A obra é dEle, e a certeza vem da fidelidade do Autor.",
      re: "Você chegou ao fim de 21 dias, mas não ao fim da caminhada. Estes dias foram sementes; o que importa agora é a continuidade. Deus começou algo em você e não abandona a obra pela metade. Haverá dias de entusiasmo e outros de aridez; em ambos, a graça sustenta. Olhe para trás com gratidão, olhe adiante com esperança e leve consigo o hábito de buscar a Deus. A intimidade é construída dia após dia.",
      ap: "Releia as suas anotações, destaque três aprendizados e decida qual hábito desta jornada você vai manter.",
      q: "O que mudou em mim nestes 21 dias e como pretendo preservar isso?",
      pr: "Pai, obrigado por esta jornada. Completa em mim a obra que começaste e dá-me perseverança para continuar. Que cada dia seja mais um passo na Tua presença. Amém.",
      ch: "Compartilhe com alguém um aprendizado desta jornada e convide essa pessoa a caminhar com Deus." }
  ];

  /* ============ ESTADO ============ */
  const KEY = "vda21_v1";
  const DEFAULTS = { done: [], favs: [], notes: {}, last: 1, started: false, font: 100, reading: false };
  const TOTAL = DAYS.length;
  let S = load();
  let notesTimer = null;

  function load() {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY));
      return Object.assign({}, DEFAULTS, saved || {});
    } catch (e) { return Object.assign({}, DEFAULTS); }
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

  const $ = (s) => document.querySelector(s);
  const $$ = (s) => Array.from(document.querySelectorAll(s));
  const setText = (id, t) => { $("#" + id).textContent = t; };
  const weekOf = (n) => Math.floor((n - 1) / 7);

  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toast.t);
    toast.t = setTimeout(() => el.classList.remove("show"), 3200);
  }

  function motivation() {
    const c = S.done.length;
    if (c === 0) return "Todo grande caminhar começa com um primeiro passo. Deus já está esperando por você.";
    if (c < 7) return "Você começou bem! Cada dia na presença de Deus fortalece o seu coração.";
    if (c < 14) return "A primeira semana ficou para trás. Continue: a constância transforma.";
    if (c < 21) return "Você está na reta final. Quem começou a boa obra em você vai completá-la!";
    return "Jornada concluída! Que a presença de Deus continue guiando os seus passos.";
  }

  /* ============ NAVEGAÇÃO ============ */
  function show(view) {
    $$(".view").forEach((s) => (s.hidden = s.id !== "view-" + view));
    $$(".main-nav [data-view]").forEach((b) => b.classList.toggle("active", b.dataset.view === view));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function route(view) {
    if (view === "day") return openDay(S.last);
    refresh();
    show(view);
  }

  /* ============ RENDERIZAÇÃO ============ */
  function refresh() {
    const c = S.done.length;
    const pct = Math.round((c / TOTAL) * 100);

    // início
    setText("homeCount", c + " de " + TOTAL + " dias");
    setText("homePct", pct + "%");
    $("#homeBar").style.width = pct + "%";
    $("#startBtn").textContent = S.started && c < TOTAL ? "Continuar minha jornada" : c >= TOTAL ? "Rever minha jornada" : "Começar minha jornada";

    // palavra em destaque (muda a cada dia do ano)
    const now = new Date();
    const doy = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
    const hl = doy % TOTAL;
    setText("hlVerse", "“" + DAYS[hl].v + "”");
    setText("hlRef", DAYS[hl].ref);
    $("#hlOpen").dataset.day = hl + 1;

    // painel
    setText("stDone", c);
    setText("stLeft", TOTAL - c);
    setText("stPct", pct + "%");
    $("#dashBar").style.width = pct + "%";
    setText("motivation", motivation());
    $("#continueBtn").textContent = c >= TOTAL ? "Rever devocionais" : "Continuar de onde parei";
    $("#finishViewBtn").hidden = c < TOTAL;
    renderCalendar();

    // favoritos
    setText("favCount", S.favs.length);
    renderFavs();
  }

  function renderCalendar() {
    const cal = $("#calendar");
    cal.textContent = "";
    for (let n = 1; n <= TOTAL; n++) {
      const b = document.createElement("button");
      b.className = "cal-day" + (S.done.includes(n) ? " done" : "") + (n === S.last ? " current" : "");
      b.textContent = n;
      b.setAttribute("aria-label", "Dia " + n + ": " + DAYS[n - 1].t + (S.done.includes(n) ? " (concluído)" : ""));
      b.addEventListener("click", () => openDay(n));
      cal.appendChild(b);
    }
  }

  function renderFavs() {
    const list = $("#favList");
    list.textContent = "";
    $("#favEmpty").hidden = S.favs.length > 0;
    S.favs.slice().sort((a, b) => a - b).forEach((n) => {
      const d = DAYS[n - 1];
      const card = document.createElement("article");
      card.className = "card fav-card";
      const h = document.createElement("h3"); h.textContent = "Dia " + n + " · " + d.t;
      const r = document.createElement("div"); r.className = "ref"; r.textContent = d.ref;
      const p = document.createElement("p"); p.textContent = "“" + d.v + "”";
      const row = document.createElement("div"); row.className = "row";
      const open = document.createElement("button"); open.className = "btn primary small"; open.textContent = "Abrir";
      open.addEventListener("click", () => openDay(n));
      const rm = document.createElement("button"); rm.className = "btn ghost small"; rm.textContent = "Remover";
      rm.addEventListener("click", () => { toggleFav(n); });
      row.append(open, rm);
      card.append(h, r, p, row);
      list.appendChild(card);
    });
  }

  function openDay(n) {
    n = Math.min(TOTAL, Math.max(1, n));
    S.last = n; S.started = true; save();
    const d = DAYS[n - 1];
    setText("dWeek", WEEKS[weekOf(n)]);
    setText("dNum", n);
    setText("dTitle", d.t);
    setText("dTheme", d.th);
    setText("dVerse", "“" + d.v + "”");
    setText("dRef", d.ref);
    setText("dEx", d.ex);
    setText("dRe", d.re);
    setText("dAp", d.ap);
    setText("dQ", d.q);
    setText("dPr", d.pr);
    setText("dCh", d.ch);
    $("#notes").value = S.notes[n] || "";
    setText("notesStatus", "Salvo automaticamente neste aparelho.");
    $("#daySelect").value = n;
    $("#prevBtn").disabled = n === 1;
    $("#nextBtn").disabled = n === TOTAL;
    updateDayButtons();
    refresh();
    show("day");
  }

  function updateDayButtons() {
    const n = S.last;
    const fav = S.favs.includes(n);
    const f = $("#favBtn");
    f.textContent = fav ? "★ Favoritado" : "☆ Favoritar";
    f.setAttribute("aria-pressed", fav);
    const done = S.done.includes(n);
    const c = $("#completeBtn");
    c.textContent = done ? "✓ Devocional concluído (toque para desfazer)" : "Concluir devocional";
    c.classList.toggle("done", done);
  }

  /* ============ AÇÕES ============ */
  function toggleFav(n) {
    const i = S.favs.indexOf(n);
    if (i >= 0) { S.favs.splice(i, 1); toast("Removido dos favoritos."); }
    else { S.favs.push(n); toast("Adicionado aos favoritos ★"); }
    save(); refresh(); updateDayButtons();
  }

  function toggleDone() {
    const n = S.last;
    const i = S.done.indexOf(n);
    if (i >= 0) {
      S.done.splice(i, 1); save(); refresh(); updateDayButtons();
      return toast("Devocional desmarcado.");
    }
    S.done.push(n); save(); refresh(); updateDayButtons();
    if (S.done.length === TOTAL) return openFinish();
    toast("Dia " + n + " concluído! " + motivation());
  }

  function nextPending() {
    for (let i = 0; i < TOTAL; i++) {
      const n = ((S.last - 1 + i) % TOTAL) + 1;
      if (!S.done.includes(n)) return n;
    }
    return null;
  }

  function continueJourney() {
    const n = nextPending();
    if (n === null) { openDay(1); return toast("Você já concluiu tudo! Revise quando quiser."); }
    openDay(n);
  }

  async function shareText(text, title) {
    if (navigator.share) {
      try { await navigator.share({ title: title, text: text }); return; }
      catch (e) { if (e && e.name === "AbortError") return; }
    }
    try { await navigator.clipboard.writeText(text); toast("Texto copiado! Cole onde quiser compartilhar."); }
    catch (e) { window.prompt("Copie o texto abaixo:", text); }
  }

  function shareReflection() {
    const n = S.last, d = DAYS[n - 1];
    const note = (S.notes[n] || "").trim();
    let txt = "“" + d.v + "”\n— " + d.ref + "\n\nDia " + n + ": " + d.t + "\nPara refletir: " + d.q;
    if (note) txt += "\n\nMinha anotação: " + note;
    txt += "\n\n21 Dias na Presença de Deus · Voz do Altíssimo";
    shareText(txt, "Dia " + n + " · " + d.t);
  }

  function openFinish() { $("#finish").hidden = false; }
  function closeFinish() { $("#finish").hidden = true; show("dashboard"); }

  function applyFont() { document.documentElement.style.fontSize = S.font + "%"; }
  function applyReading() {
    document.body.classList.toggle("reading", S.reading);
    $("#readingBtn").setAttribute("aria-pressed", S.reading);
  }

  /* ============ EVENTOS ============ */
  function init() {
    // seletor de dias
    const sel = $("#daySelect");
    DAYS.forEach((d, i) => {
      const o = document.createElement("option");
      o.value = i + 1; o.textContent = "Dia " + (i + 1) + " — " + d.t;
      sel.appendChild(o);
    });
    sel.addEventListener("change", () => openDay(parseInt(sel.value, 10)));

    $$("[data-view]").forEach((b) => b.addEventListener("click", () => route(b.dataset.view)));
    $("#startBtn").addEventListener("click", () => {
      if (!S.started) openDay(1); else continueJourney();
    });
    $("#hlOpen").addEventListener("click", (e) => openDay(parseInt(e.currentTarget.dataset.day, 10)));
    $("#continueBtn").addEventListener("click", continueJourney);
    $("#finishViewBtn").addEventListener("click", openFinish);
    $("#prevBtn").addEventListener("click", () => openDay(S.last - 1));
    $("#nextBtn").addEventListener("click", () => openDay(S.last + 1));
    $("#favBtn").addEventListener("click", () => toggleFav(S.last));
    $("#shareBtn").addEventListener("click", shareReflection);
    $("#completeBtn").addEventListener("click", toggleDone);

    $("#notes").addEventListener("input", (e) => {
      setText("notesStatus", "Salvando…");
      clearTimeout(notesTimer);
      notesTimer = setTimeout(() => {
        const v = e.target.value;
        if (v.trim()) S.notes[S.last] = v; else delete S.notes[S.last];
        save();
        setText("notesStatus", "Salvo automaticamente neste aparelho ✓");
      }, 400);
    });

    $("#fontUp").addEventListener("click", () => { S.font = Math.min(140, S.font + 10); applyFont(); save(); });
    $("#fontDown").addEventListener("click", () => { S.font = Math.max(80, S.font - 10); applyFont(); save(); });
    $("#readingBtn").addEventListener("click", () => {
      S.reading = !S.reading; applyReading(); save();
      toast(S.reading ? "Modo de leitura ativado." : "Modo de leitura desativado.");
    });

    $("#finishClose").addEventListener("click", closeFinish);
    $("#finishShare").addEventListener("click", () =>
      shareText("Concluí os 21 dias na presença de Deus! 🙏✝\nDevocional “21 Dias na Presença de Deus” · Voz do Altíssimo", "21 Dias na Presença de Deus"));
    $("#finish").addEventListener("click", (e) => { if (e.target.id === "finish") closeFinish(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !$("#finish").hidden) closeFinish(); });

    $("#resetBtn").addEventListener("click", () => {
      if (confirm("Tem certeza? Isso apagará seu progresso, favoritos e anotações.")) {
        S = Object.assign({}, DEFAULTS, { font: S.font, reading: S.reading, done: [], favs: [], notes: {} });
        save(); refresh(); toast("Jornada reiniciada. Que Deus abençoe o seu recomeço!");
      }
    });

    applyFont(); applyReading(); refresh(); show("home");
  }

  init();
})();