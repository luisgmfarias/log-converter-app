# Conversor de log:

Esse é um projeto feito para um processo seletivo de emprego.
O objetivo é construir uma aplicação capaz de converter um log de um tipo A
para um tipo B.

## Instruções

Para rodar o backend, configurar no arquivo `infra/config/firebase.ts` o campo **databaseURL**, com a URL do seu app firebase e corretamente importar o arquivo JSON de configuração de SDK do firebase. Exemplo abaixo:

    import admin from  "firebase-admin";
    import serviceAccount from <ARQUIVO_SDK_FIREBASE>;

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
        databaseURL: <FIREBASE_DATABASE_URL>,
    });

    const db = admin.firestore();

    export { db };

No frontend, deve-se estar atento a inserir o .env corretamente da URL da api e sua porta. Usa-se o `.env.example` como exemplo.

## Techs utilizadas

- ReactJS
- NodeJS
- Typescript
- Express
- Firebase
- Styled Components

## Desenvolvedor

Sou **Luís Guilherme Farias**. Tenho experiência profissional em React, NextJS e outros.
