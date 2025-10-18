<?php
  global $search_filter_query;
  $pagination_type = 'default'; // Default pagination type
  $searchandfilterId = null;

  // Check if $search_filter_query exists and has the expected structure
  if ( isset( $search_filter_query ) &&
       isset( $search_filter_query->query ) &&
       isset( $search_filter_query->query->query_vars['search_filter_id'] ) ) {

    $searchandfilterId = $search_filter_query->query->query_vars['search_filter_id'];
    $sf_current_query = \Search_Filter\Queries\Query::find( array(
      'id' => $searchandfilterId
    ) );

    if ( ! is_wp_error( $sf_current_query ) ) {
      $attributes = $sf_current_query->get_attributes();
      if ( isset( $attributes['resultsPaginationType'] ) ) {
        $pagination_type = $attributes['resultsPaginationType'];
      }
    }
  }
?>
<div id="search-filter-<?php echo $searchandfilterId; ?>" class="c-search-filter u-spacing--double">
  <?php if ($query->have_posts()) : ?>
    <div class="c-posts" data-bp="grid 6@sm 4@lg">
      <?php while ($query->have_posts()): $query->the_post(); ?>
        <?php include locate_template('resources/views/blocks/block.php'); ?>
      <?php endwhile; wp_reset_postdata(); ?>
    </div>
  <?php endif; ?>
  <?php if ($pagination_type == 'default') : ?>
    <?php include locate_template('resources/views/blocks/pagination.php'); ?>
  <?php endif; ?>
</div>
