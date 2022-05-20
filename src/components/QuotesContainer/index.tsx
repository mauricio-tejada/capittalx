import { Container, CurrencyContainer } from "./style";

import api from "../../services/api"
import { useEffect, useState } from "react";

interface Quote {
    name: string;
    coin: string;
    icon: string;
    priceChangePercent: string;
    lastPriceReal: string;
}

export function QuotesContainer() {

    const [quotes, setQuotes] = useState<Quote[]>([])

    useEffect(() => {
        api.get('cryptosCurrency')
            .then(response => setQuotes(response.data))
    })

    return (
        <Container>
            <CurrencyContainer>
                {quotes.map(quote => (
                    <div key={quote.name}>
                        <p>{quote.name}</p>

                        <p>
                            {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(parseFloat(quote.lastPriceReal.replace(".", "")))}
                        </p>

                        <p>
                            {new Intl.NumberFormat('pt-BR', {
                                style: 'decimal',
                            }).format(parseFloat(quote.priceChangePercent))}
                        </p>

                    </div>
                )
                )}

            </CurrencyContainer>
        </Container>
    )
}