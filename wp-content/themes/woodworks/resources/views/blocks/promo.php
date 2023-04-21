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
  $context['promo']['anchor'] = $block['anchor'];
}

$context['promo']['image'] = get_field( 'promo_image' );
$context['promo']['heading'] = get_field( 'promo_heading' );
$context['promo']['content'] = get_field( 'promo_content' );
$context['promo']['button'] = get_field( 'promo_button' );

$templates = array(
  '/wp-content/themes/woodworks/resources/views/patterns/03-organisms/sections/promos/promo.twig',
  get_stylesheet_directory() . '/resources/views/patterns/03-organisms/sections/promos/promo.twig',
);
Timber::render( $templates, $context );