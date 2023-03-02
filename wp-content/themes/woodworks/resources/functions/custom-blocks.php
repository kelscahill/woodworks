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
    /* Register an accordion block. */
    acf_register_block_type(
      array(
        'name'            => 'accordion',
        'title'           => 'Accordion',
        'description'     => 'A custom accordion block.',
        'category'        => 'custom',
        'icon'            => 'insert',
        'keywords'        => array( 'accordion', 'dropdown' ),
        'render_template' => '/resources/views/blocks/accordion.php',
        'mode'            => 'edit',
        'supports'        => array(
          'mode' => false,
        ),
      )
    );
  }
}
add_action( 'init', 'register_custom_block_types' );