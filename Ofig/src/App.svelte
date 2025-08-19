<script>
	let quantities = $state({
		cloud: 1,
		tifa: 1,
		barret: 1,
		vincent: 0
	});

	function updateQuantity(item, value) {
		quantities[item] = parseInt(value);
	}

	function removeItem(item) {
		quantities[item] = 0;
	}

	function addToCart(item) {
		quantities[item] = quantities[item] + 1;
	}

	let total = $derived((quantities.cloud * 59) + (quantities.tifa * 69) + (quantities.barret * 69) + (quantities.vincent * 74.90));
	let totalItems = $derived(quantities.cloud + quantities.tifa + quantities.barret + quantities.vincent);
</script>

<div class="app">
	<header>
		<h1>
			<div class="logo">oFig</div> <span>Figurines et statuettes</span>
		</h1>
	</header>

	<main>
		<h2 class="main__title">
			Votre panier <span class="cart-count">{totalItems} produit{totalItems > 1 ? 's' : ''}</span>
		</h2>

		<div class="cart-container">

                <section class="articles">

                    <article class="article__item">
                    <img src="/cloud.png" alt="Figurine-Cloud" class="article-item__img">
                    <div class="article__item-opus">
                        Final Fantasy VII
                    </div>
                    <h3 class="article-item__title">
                        Cloud Strife Remake
                    </h3>
                    <p class="article-item__description">
                        Figurine de 8 pouces-livrée avec son packaging
                    </p>
                    <button class="article-item__button" onclick={() => addToCart('cloud')}>
                        <div class="article__item-button-text">
                            Ajouter au panier
                        </div>
                    </button>
                </article>

                <article class="article__item">
                    <img src="/tifa.png" alt="Figurine-Tifa" class="article-item__img">
                    <div class="article__item-opus">
                        Final Fantasy Advent Children
                    </div>
                    <h3 class="article-item__title">
                        Tifa Lockhart
                    </h3>
                    <p class="article-item__description">
                        Figurine de 7 pouces-livrée avec son packaging
                    </p>
                    <button class="article-item__button" onclick={() => addToCart('tifa')}>
                        <div class="article__item-button-text">
                            Ajouter au panier
                        </div>
                    </button>
                </article>

                <article class="article__item">
                    <img src="/vincent.png" alt="Figurine-Vincent" class="article-item__img">
                    <div class="article__item-opus">
                        Final Fantasy VII
                    </div>
                    <h3 class="article-item__title">
                        Vincent Valentine
                    </h3>
                    <p class="article-item__description">
                        Figurine de 7 pouces-livrée avec son packaging
                    </p>
                    <button class="article-item__button" onclick={() => addToCart('vincent')}>
                        <div class="article__item-button-text">
                            Ajouter au panier
                        </div>
                    </button>
                </article>
            </section>

			<section class="cart-section">
				<h3 class="cart-title">Votre panier</h3>
				
				<div class="cart-table">
					<div class="cart-header">
						<div class="header-figurine">Figurine</div>
						<div class="header-price">Prix unitaire</div>
						<div class="header-quantity">Quantité</div>
					</div>

					<div class="cart-item">
						<div class="item-info">Cloud Strife</div>
						<div class="item-price">59 €</div>
						<div class="item-quantity">
							<input type="number" bind:value={quantities.cloud} min="0" />
							<button class="remove-btn" onclick={() => removeItem('cloud')}>supprimer</button>
						</div>
					</div>

					<div class="cart-item">
						<div class="item-info">Tifa Lockhart</div>
						<div class="item-price">69 €</div>
						<div class="item-quantity">
							<input type="number" bind:value={quantities.tifa} min="0" />
							<button class="remove-btn" onclick={() => removeItem('tifa')}>supprimer</button>
						</div>
					</div>

					<div class="cart-item">
						<div class="item-info">Barret Wallace</div>
						<div class="item-price">69 €</div>
						<div class="item-quantity">
							<input type="number" bind:value={quantities.barret} min="0" />
							<button class="remove-btn" onclick={() => removeItem('barret')}>supprimer</button>
						</div>
					</div>

					<div class="cart-item">
						<div class="item-info">Vincent Valentine</div>
						<div class="item-price">74,90 €</div>
						<div class="item-quantity">
							<input type="number" bind:value={quantities.vincent} min="0" />
							<button class="remove-btn" onclick={() => removeItem('vincent')}>supprimer</button>
						</div>
					</div>

					<div class="cart-total">
						<div class="total-label">Total de la commande :</div>
						<div class="total-amount">{total}€</div>
					</div>
				</div>

				<h3 class="delivery-title">Préférences de livraison</h3>
				
				<div class="delivery-section">
					<div class="delivery-question">
						<h4>Où souhaitez-vous être livré ?</h4>
						<div class="radio-group">
							<input type="radio" id="current-address" name="delivery" checked />
							<label for="current-address">Mon adresse courante</label>
						</div>
						<div class="radio-group">
							<input type="radio" id="other-address" name="delivery" />
							<label for="other-address">Autre adresse</label>
						</div>
					</div>

					<div class="address-section">
						<h4>Adresse</h4>
						<input type="text" placeholder="Rue" class="address-input" />
						<input type="text" placeholder="Code postal" class="address-input" />
						<input type="text" placeholder="Ville" class="address-input" />
					</div>

					<div class="options-section">
						<h4>Options</h4>
						<div class="checkbox-group">
							<input type="checkbox" id="sms-tracking" checked />
							<label for="sms-tracking">Suivi de livraison par sms (inclus)</label>
						</div>
						<div class="checkbox-group">
							<input type="checkbox" id="satisfaction" />
							<label for="satisfaction">Satisfait ou remboursé (+ 2 euros)</label>
						</div>
						<div class="checkbox-group">
							<input type="checkbox" id="warranty" />
							<label for="warranty">Garantie 2 ans (+ 10 euros)</label>
						</div>
					</div>

					<div class="additional-info">
						<h4>Informations complémentaires</h4>
						<textarea placeholder="interphone, bâtiment, etc..." class="info-textarea"></textarea>
					</div>
				</div>

				<div class="final-total">
					<div class="final-total-label">Montant total à régler :</div>
					<div class="final-total-amount">{total}€</div>
				</div>

				<div class="action-buttons">
					<button class="continue-shopping">Continuer vos achats</button>
					<button class="validate-pay">Valider et payer</button>
				</div>
			</section>
		</div>
	</main>

	<footer class="footer__container">
		<span>oFig-toutes les images sont sous copyright SquareEnix</span>
	</footer>
</div>

<style>
.cart-count {
	font-style: italic;
	font-weight: normal;
}

.cart-container {
	max-width: 800px;
	margin: 0 auto;
	padding: 20px;
	background-color: white;
}

.cart-section {
	background-color: #f8f8f8;
	padding: 20px;
	border-radius: 5px;
}

.cart-title {
	font-size: 1.2em;
	font-weight: bold;
	margin-bottom: 20px;
	color: #333;
}

.cart-table {
	background-color: white;
	border: 1px solid #ddd;
	border-radius: 5px;
	overflow: hidden;
	margin-bottom: 20px;
}

.cart-header {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	background-color: #f0f0f0;
	padding: 15px;
	font-weight: bold;
	border-bottom: 1px solid #ddd;
	font-size: 0.9em;
	color: #666;
}

.cart-item {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	padding: 15px;
	border-bottom: 1px solid #eee;
	align-items: center;
}

.cart-item:last-of-type {
	border-bottom: none;
}

.item-info {
	font-weight: 500;
	color: #333;
}

.item-price {
	color: #333;
	font-weight: 500;
}

.item-quantity {
	display: flex;
	align-items: center;
	gap: 10px;
}

.item-quantity input {
	width: 50px;
	padding: 5px;
	border: 1px solid #ddd;
	border-radius: 3px;
	text-align: center;
}

.remove-btn {
	background: none;
	border: none;
	color: #C60000;
	text-decoration: underline;
	cursor: pointer;
	font-size: 0.8em;
}

.remove-btn:hover {
	color: #a00000;
}

.cart-total {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	padding: 15px;
	background-color: #f8f8f8;
	font-weight: bold;
	border-top: 2px solid #ddd;
}

.total-label {
	grid-column: 1 / 3;
	text-align: right;
	padding-right: 20px;
}

.total-amount {
	color: #C60000;
	font-size: 1.2em;
}

.delivery-title {
	font-size: 1.1em;
	font-weight: bold;
	margin: 30px 0 20px 0;
	color: #333;
}

.delivery-section {
	background-color: white;
	padding: 20px;
	border-radius: 5px;
	border: 1px solid #ddd;
}

.delivery-question h4 {
	margin: 0 0 15px 0;
	font-size: 1em;
	color: #333;
}

.radio-group, .checkbox-group {
	margin: 10px 0;
	display: flex;
	align-items: center;
	gap: 8px;
}

.radio-group input[type="radio"], .checkbox-group input[type="checkbox"] {
	margin: 0;
}

.radio-group label, .checkbox-group label {
	font-size: 0.9em;
	color: #555;
	cursor: pointer;
}

.address-section {
	margin: 20px 0;
	padding: 15px 0;
	border-top: 1px solid #eee;
}

.address-section h4 {
	margin: 0 0 15px 0;
	font-size: 1em;
	color: #333;
}

.address-input {
	width: 100%;
	padding: 10px;
	margin: 5px 0;
	border: 1px solid #ddd;
	border-radius: 3px;
	font-size: 0.9em;
}

.options-section {
	margin: 20px 0;
	padding: 15px 0;
	border-top: 1px solid #eee;
}

.options-section h4 {
	margin: 0 0 15px 0;
	font-size: 1em;
	color: #333;
}

.additional-info {
	margin: 20px 0;
	padding: 15px 0;
	border-top: 1px solid #eee;
}

.additional-info h4 {
	margin: 0 0 15px 0;
	font-size: 1em;
	color: #333;
}

.info-textarea {
	width: 100%;
	min-height: 80px;
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 3px;
	font-family: inherit;
	font-size: 0.9em;
	resize: vertical;
}

.final-total {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	background-color: white;
	border: 1px solid #ddd;
	border-radius: 5px;
	margin: 20px 0;
	font-size: 1.1em;
}

.final-total-label {
	font-weight: bold;
	color: #333;
}

.final-total-amount {
	font-weight: bold;
	font-size: 1.3em;
	color: #C60000;
}

.action-buttons {
	display: flex;
	gap: 20px;
	justify-content: center;
	margin-top: 30px;
}

.continue-shopping {
	padding: 15px 25px;
	background-color: #f0f0f0;
	border: 1px solid #ddd;
	border-radius: 5px;
	cursor: pointer;
	font-size: 0.9em;
	color: #666;
}

.continue-shopping:hover {
	background-color: #e8e8e8;
}

.validate-pay {
	padding: 15px 25px;
	background-color: #C60000;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-size: 0.9em;
	font-weight: bold;
}

.validate-pay:hover {
	background-color: #a00000;
}

.articles {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
	margin-bottom: 40px;
}

.article__item {
	background-color: white;
	border: 1px solid #ddd;
	border-radius: 5px;
	overflow: hidden;
	transition: box-shadow 0.3s ease;
}

.article__item:hover {
	box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.article-item__img {
	width: 100%;
	height: 250px;
	object-fit: cover;
	border-bottom: 1px solid #eee;
}

.article__item-opus {
	padding: 15px 15px 5px 15px;
	font-size: 0.8em;
	color: #999;
	text-transform: uppercase;
	font-weight: normal;
}

.article-item__title {
	padding: 0 15px;
	font-size: 1.2em;
	font-weight: bold;
	color: #333;
	margin: 0 0 10px 0;
}

.article-item__description {
	padding: 0 15px;
	font-size: 0.9em;
	color: #666;
	margin: 0 0 20px 0;
	line-height: 1.4;
}

.article-item__button {
	width: 100%;
	padding: 15px;
	background-color: #C60000;
	color: white;
	border: none;
	cursor: pointer;
	transition: background-color 0.3s ease;
	margin-top: auto;
}

.article-item__button:hover {
	background-color: #a00000;
}

.article__item-button-text {
	font-size: 0.9em;
	font-weight: bold;
}
</style>