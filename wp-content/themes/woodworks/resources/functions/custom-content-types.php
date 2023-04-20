<?php
/**
 *
 * @file
 * Register custom content types.
 *
 * @package WordPress
 */

function register_custom_post_types() {
  /**
   * Post Type: Testimonials.
   */

  $labels = array(
    'name' => __( 'Testimonials' ),
    'singular_name' => __( 'Testimonial' ),
    'menu_name' => __( 'Testimonials' ),
    'all_items' => __( 'All Testimonials' ),
    'add_new' => __( 'Add New Testimonial' ),
    'add_new_item' => __( 'Add New Testimonial Item' ),
    'edit_item' => __( 'Edit Testimonial' ),
    'new_item' => __( 'New Testimonial' ),
    'view_item' => __( 'View Testimonial' ),
    'view_items' => __( 'View Testimonial' ),
    'search_items' => __( 'Search Testimonials' ),
    'not_found' => __( 'No Testimonials Found' ),
    'not_found_in_trash' => __( 'No Testimonials Found in Trash' ),
    'parent_item_colon' => __( 'Parent Testimonial' ),
  );

  $args = array(
    'label' => __( 'Testimonials' ),
    'labels' => $labels,
    'description' => '',
    'public' => true,
    'publicly_queryable' => true,
    'show_ui' => true,
    'show_in_rest' => true,
    'rest_base' => '',
    'has_archive' => true,
    'show_in_menu' => true,
    'exclude_from_search' => false,
    'map_meta_cap' => true,
    'hierarchical' => false,
    'rewrite' => array( 'slug' => 'testimonial', 'with_front' => true ),
    'query_var' => true,
    'menu_icon' => 'dashicons-admin-comments',
    'supports' => array( 'title', 'editor', 'thumbnail', 'excerpt' ),
    'menu_position' => 4,
    'taxonomies' => array( 'category', 'post_tag' )
  );

  register_post_type( 'testimonials', $args );
}
add_action('init', 'register_custom_post_types');
