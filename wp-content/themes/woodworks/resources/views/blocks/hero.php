<?php
/**
 * The template for block
 *
 * Methods for TimberHelper can be found in the /functions sub-directory
 *
 * @param   array $block The block settings and attributes
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

$context = Timber::context();
if (!empty($block['anchor'])) {
  $context['hero']['anchor'] = $block['anchor'];
}

$context['hero']['kicker'] = get_field( 'hero_kicker' );
$context['hero']['heading'] = get_field( 'hero_heading' );
$context['hero']['dek'] = get_field( 'hero_dek' );
$context['hero']['image'] = get_field( 'hero_image' );

// $templates = array(
//   '/wp-content/themes/woodworks/resources/views/patterns/03-organisms/sections/heroes/hero.twig',
//   get_stylesheet_directory() . '/resources/views/patterns/03-organisms/sections/heroes/hero.twig',
// );
// Timber::render( $templates, $context );


