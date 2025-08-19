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

<link rel="stylesheet" href="./app-article.css">

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

