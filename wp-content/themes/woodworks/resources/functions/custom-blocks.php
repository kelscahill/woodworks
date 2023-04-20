<?php
/**
 *
 * @file
 * Register custom block types.
 *
 * @package WordPress
 */

function register_custom_block_types() {
  if ( function_exists( 'acf_register_block_type' ) ) {
    /* Register an hero block. */
    acf_register_block_type(
      array(
        'name'            => 'hero',
        'title'           => 'Hero',
        'description'     => 'A custom hero block.',
        'category'        => 'custom',
        'icon'            => 'insert',
        'keywords'        => array( 'hero', 'banner' ),
        'render_template' => '/resources/views/blocks/hero.php',
        'mode'            => 'edit',
        'supports'        => array(
          'mode' => false,
          'anchor' => true,
        ),
      )
    );
    /* Register an section block. */
    acf_register_block_type(
      array(
        'name'            => 'section',
        'title'           => 'Section',
        'description'     => 'A custom section block.',
        'category'        => 'custom',
        'icon'            => 'insert',
        'keywords'        => array( 'secton', 'content' ),
        'render_template' => '/resources/views/blocks/section.php',
        'mode'            => 'edit',
        'supports'        => array(
          'mode' => false,
          'anchor' => true,
        ),
      )
    );
    /* Register an promo block. */
    acf_register_block_type(
      array(
        'name'            => 'promo',
        'title'           => 'Promo',
        'description'     => 'A custom promo block.',
        'category'        => 'custom',
        'icon'            => 'insert',
        'keywords'        => array( 'promo', 'content' ),
        'render_template' => '/resources/views/blocks/promo.php',
        'mode'            => 'edit',
        'supports'        => array(
          'mode' => false,
          'anchor' => true,
        ),
      )
    );
  }
}
add_action( 'init', 'register_custom_block_types' );