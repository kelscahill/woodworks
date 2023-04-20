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
  $context['section']['anchor'] = $block['anchor'];
}

$context['section']['kicker'] = get_field( 'section_kicker' );
$context['section']['heading'] = get_field( 'section_heading' );
$context['section']['description'] = get_field( 'section_description' );
$context['section']['content_type'] = get_field( 'section_content_type' );
$context['section']['background_color'] = get_field( 'section_background_color' );
$context['section']['content'] = get_field( 'section_content' );
$context['section']['cards'] = get_field( 'section_cards' );
$context['section']['footnote'] = get_field( 'section_footnote' );
$context['section']['button'] = get_field( 'section_button' );

$templates = array(
  '/wp-content/themes/woodworks/resources/views/patterns/03-organisms/sections/section/section.twig',
  get_stylesheet_directory() . '/resources/views/patterns/03-organisms/sections/section/section.twig',
);
Timber::render( $templates, $context );


