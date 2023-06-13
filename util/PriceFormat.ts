const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'Eur'
    }).format(amount / 100)
}

export default formatPrice