<?php
  global $searchandfilter;
  $searchandfilterId = $query->query['search_filter_id'];
  $sf_current_query = $searchandfilter->get($searchandfilterId)->current_query();
  // $pagination_type = $sf_current_query->form_settings['pagination_type'];
?>
<div class="c-posts" data-bp="grid 6@sm 4@lg">
  <?php if ($query->have_posts()) : ?>
    <?php while ($query->have_posts()): $query->the_post(); $post_id = get_the_ID(); ?>
      <?php include locate_template('resources/views/blocks/block.php'); ?>
    <?php endwhile; ?>
  <?php else: ?>
    <p data-search-filter-action='infinite-scroll-end'></p>
  <?php endif; ?>
</div>
<?php include locate_template('resources/views/blocks/pagination.php'); ?>
