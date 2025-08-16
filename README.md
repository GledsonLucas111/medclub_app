# MedClub

Aplicativo mobile para agendamento e gerenciamento de consultas médicas, desenvolvido em React Native com Expo.

## Funcionalidades
- Listagem de consultas agendadas
- Agendamento de novas consultas (escolha de médico, data, hora e local)
- Visualização de detalhes da consulta
- Cancelamento de consultas
- Interface moderna com Tailwind CSS (NativeWind)

## Tecnologias Utilizadas
- React Native + Expo
- TypeScript
- React Navigation
- Context API para gerenciamento de estado
- NativeWind (Tailwind CSS para React Native)
- date-fns para manipulação de datas

## Estrutura do Projeto
```
├── App.tsx                # Ponto de entrada do app
├── app.json               # Configurações do Expo
├── global.css             # Estilos globais (Tailwind)
├── src/
│   ├── components/        # Componentes reutilizáveis (botão, input, card, etc)
│   ├── constants/         # Dados estáticos (médicos, locais)
│   ├── context/           # Contexto de consultas
│   ├── screens/           # Telas principais (Home, Consulta, Detalhe)
│   └── types/             # Tipagens TypeScript
├── assets/                # Imagens e fontes
```

## Como rodar o projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/GledsonLucas111/medclub_app.git
cd medclub_app
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Instale o Expo CLI (caso não tenha):**

```bash
npm install -g expo-cli
```

4. **Execute o app:**

```bash
npm start
```

Ou, para rodar direto no Android:

```bash
npm run android
```

5. **Abra no seu dispositivo:**
- Use o app Expo Go para escanear o QR Code exibido no terminal ou navegador.

## Observações
- Para builds de produção (APK/AAB), utilize o EAS Build: `npx eas build -p android`
- O projeto já está configurado para usar fontes customizadas e Tailwind CSS.
- Não é necessário backend: os dados de consulta ficam apenas em memória (Context API).

---

Desenvolvido por Gledson Lucas
