<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { CharacterSchema, type Character } from '$lib/types/character';
	import type { SubmitFunction } from '@sveltejs/kit';

	const emptyCharacter: Character = {
		name: '',
		metatype: '',
		attributes: '',
		qualities: '',
		skills: '',
		amps: '',
		weapons: '',
		equipment: '',
		contacts: '',
		'physical-monitor': '',
		'stun-monitor': '',
		armor: ''
	};

	const onSubmit: SubmitFunction = () => {
		return async ({ result, update }) => {
			if (result.type === 'redirect') {
				await navigator.clipboard.writeText(result.location);
				alert('Character copied to clipboard');
			}

			update();
		};
	};

	function getCharacterFromUrl(url: URL) {
		const stringified = url.searchParams.get('character');
		if (!stringified) return emptyCharacter;
		const json = JSON.parse(stringified);
		return {
			...emptyCharacter,
			...CharacterSchema.partial().parse(json)
		};
	}

	$: character = getCharacterFromUrl($page.url);
</script>

<nav class="container">
	<ul>
		<li>
			<strong>Shadowrun Anarchy Character Creation</strong>
		</li>
	</ul>
</nav>

<main class=" container">
	<section>
		<form method="POST" autocomplete="off" use:enhance={onSubmit}>
			<button type="submit">Save character</button>
			<label for="name">
				Character name:
				<input name="name" type="text" value={character.name} />
			</label>
			<label for="armor">
				Armor:
				<input name="armor" type="text" value={character.armor} />
			</label>
			<label for="physical-monitor">
				Physical Monitor:
				<input name="physical-monitor" type="text" value={character['physical-monitor']} />
			</label>
			<label for="stun-monitor">
				Stun Monitor:
				<input name="stun-monitor" type="text" value={character['stun-monitor']} />
			</label>
			<label for="metatype">
				Character metatype:
				<input name="metatype" type="text" value={character.metatype} />
			</label>
			<label for="attributes">
				Attributes:
				<textarea name="attributes" id="attributes" value={character.attributes} rows="6"
				></textarea>
			</label>
			<label for="qualities"
				>Qualities:
				<textarea name="qualities" id="qulitites" value={character.qualities} rows="6"></textarea>
			</label>
			<label for="skills">
				Skills:
				<textarea name="skills" id="skills" value={character.skills} rows="6"></textarea>
			</label>
			<label for="amps">
				Amps:
				<textarea name="amps" id="amps" value={character.amps} rows="6"></textarea>
			</label>
			<label for="weapons">
				Weapons:
				<textarea name="weapons" id="weapons" value={character.weapons} rows="3"></textarea>
			</label>
			<label for="equipment">
				Equipment:
				<textarea name="equipment" id="equipment" value={character.equipment} rows="3"></textarea>
			</label>
			<label for="contacts">
				Contacts:
				<textarea name="contacts" id="contacts" value={character.contacts} rows="6"></textarea>
			</label>
			<button type="submit">Save character</button>
		</form>
	</section>

	<!-- Debug -->
	<!-- <section>
		<pre>
			{JSON.stringify(character, null, 2)}
		</pre>
	</section> -->
</main>
