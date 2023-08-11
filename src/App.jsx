import React, { useState } from 'react';
import './App.css';

const quotes = [
  "सज्जन पुरुषों के कल्याण के लिए और दुष्कर्मियों के विनाश के लिए और धर्म की स्थापना के लिए मैं युगों-युगों से प्रत्येक युग में जन्म लेता आया हूं।",
  "हे भरतवंशी, जब-जब जहाँ-जहाँ धर्म का ह्रास होता है और अधर्म का प्रबल उदय होता है, तब-तब मैं अवतरित होता हूँ",
  "मैं प्रलय का मूलकारण और महाकाल हूँ जो जगत का संहार करने के लिए आता है। तुम्हारे युद्ध में भाग लेने के बिना भी युद्ध की व्यूह रचना में खड़े विरोधी पक्ष के योद्धा मारे जाएंगे।",
  "क्रोध से उत्पन्न होता है मोह और मोह से स्मृति विभ्रम। स्मृति के भ्रमित होने पर बुद्धि का नाश होता है और बुद्धि के नाश होने से वह मनुष्य नष्ट हो जाता है।",
  "हे पार्थ! जो पुरुष इस लोक में इस प्रकार परम्परा से प्रचलित सृष्टिचक्र के अनुकूल नहीं बरतता अर्थात अपने कर्तव्य का पालन नहीं करता, वह इन्द्रियों द्वारा भोगों में रमण करने वाला पापायु पुरुष व्यर्थ ही जीता है।",
  "सम्यक् प्रकार से अनुष्ठित परधर्म की अपेक्षा गुणरहित स्वधर्म का पालन श्रेयष्कर है स्वधर्म में मरण कल्याणकारक है किन्तु परधर्म भय को देने वाला है।"
];

function App() {
  const [randomQuote, setRandomQuote] = useState('काम, क्रोध और लोभ, ये आत्मविनाश के नरक के तीन द्वार हैं। अतः इन तीनों का त्याग करना चाहिए।');

  const generateRandomQuote = () => {
    if (quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length) + 1;
      setRandomQuote(quotes[randomIndex]);
    } else {
      console.log('Data not available yet');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Quote Generator</h1>
        <blockquote className="quote">{randomQuote}</blockquote>
        <button className="generate-btn" onClick={generateRandomQuote}>Generate Quote</button>
      </header>
    </div>
  );
}

export default App;
