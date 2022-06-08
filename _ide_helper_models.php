<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * App\Models\Comment
 *
 * @property int $id
 * @property int $user_id
 * @property string $commentable_type
 * @property int $commentable_id
 * @property string $body
 * @property int $_lft
 * @property int $_rgt
 * @property int|null $parent_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User|null $author
 * @property-read \Kalnoy\Nestedset\Collection|Comment[] $children
 * @property-read int|null $children_count
 * @property-read \Illuminate\Database\Eloquent\Model|\Eloquent $commentable
 * @property-read Comment|null $parent
 * @method static \Kalnoy\Nestedset\Collection|static[] all($columns = ['*'])
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment ancestorsAndSelf($id, array $columns = [])
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment ancestorsOf($id, array $columns = [])
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment applyNestedSetScope(?string $table = null)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment countErrors()
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment d()
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment defaultOrder(string $dir = 'asc')
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment descendantsAndSelf($id, array $columns = [])
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment descendantsOf($id, array $columns = [], $andSelf = false)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment fixSubtree($root)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment fixTree($root = null)
 * @method static \Kalnoy\Nestedset\Collection|static[] get($columns = ['*'])
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment getNodeData($id, $required = false)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment getPlainNodeData($id, $required = false)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment getTotalErrors()
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment hasChildren()
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment hasParent()
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment isBroken()
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment leaves(array $columns = [])
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment makeGap(int $cut, int $height)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment moveNode($key, $position)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment newModelQuery()
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment newQuery()
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment orWhereAncestorOf(bool $id, bool $andSelf = false)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment orWhereDescendantOf($id)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment orWhereNodeBetween($values)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment orWhereNotDescendantOf($id)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment query()
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment rebuildSubtree($root, array $data, $delete = false)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment rebuildTree(array $data, $delete = false, $root = null)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment reversed()
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment root(array $columns = [])
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment whereAncestorOf($id, $andSelf = false, $boolean = 'and')
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment whereAncestorOrSelf($id)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment whereBody($value)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment whereCommentableId($value)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment whereCommentableType($value)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment whereCreatedAt($value)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment whereDescendantOf($id, $boolean = 'and', $not = false, $andSelf = false)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment whereDescendantOrSelf(string $id, string $boolean = 'and', string $not = false)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment whereId($value)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment whereIsAfter($id, $boolean = 'and')
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment whereIsBefore($id, $boolean = 'and')
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment whereIsLeaf()
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment whereIsRoot()
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment whereLft($value)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment whereNodeBetween($values, $boolean = 'and', $not = false)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment whereNotDescendantOf($id)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment whereParentId($value)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment whereRgt($value)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment whereUpdatedAt($value)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment whereUserId($value)
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment withDepth(string $as = 'depth')
 * @method static \Kalnoy\Nestedset\QueryBuilder|Comment withoutRoot()
 */
	class Comment extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Post
 *
 * @property int $id
 * @property string $uuid
 * @property string|null $title
 * @property int $published
 * @property array|null $raw
 * @property string|null $settings
 * @property string|null $excerpt
 * @property int|null $category_id
 * @property int $user_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\PostCategory|null $category
 * @property-read \Kalnoy\Nestedset\Collection|\App\Models\Comment[] $comments
 * @property-read int|null $comments_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\User[] $favoriters
 * @property-read int|null $favoriters_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Overtrue\LaravelFavorite\Favorite[] $favorites
 * @property-read int|null $favorites_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Recent[] $recents
 * @property-read int|null $recents_count
 * @property-read \App\Models\User|null $user
 * @property-read \Illuminate\Database\Eloquent\Collection|\CyrildeWit\EloquentViewable\View[] $views
 * @property-read int|null $views_count
 * @method static \Database\Factories\PostFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Post getRecents()
 * @method static \Illuminate\Database\Eloquent\Builder|Post newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Post newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Post orderByUniqueViews(string $direction = 'desc', $period = null, ?string $collection = null, string $as = 'unique_views_count')
 * @method static \Illuminate\Database\Eloquent\Builder|Post orderByViews(string $direction = 'desc', ?\CyrildeWit\EloquentViewable\Support\Period $period = null, ?string $collection = null, bool $unique = false, string $as = 'views_count')
 * @method static \Illuminate\Database\Eloquent\Builder|Post query()
 * @method static \Illuminate\Database\Eloquent\Builder|Post whereCategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Post whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Post whereExcerpt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Post whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Post wherePublished($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Post whereRaw($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Post whereSettings($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Post whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Post whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Post whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Post whereUuid($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Post withViewsCount(?\CyrildeWit\EloquentViewable\Support\Period $period = null, ?string $collection = null, bool $unique = false, string $as = 'views_count')
 */
	class Post extends \Eloquent implements \CyrildeWit\EloquentViewable\Contracts\Viewable {}
}

namespace App\Models{
/**
 * App\Models\PostCategory
 *
 * @property int $id
 * @property string $title
 * @property string $slug
 * @property string $icon
 * @property string $color
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Post[] $posts
 * @property-read int|null $posts_count
 * @method static \Database\Factories\PostCategoryFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|PostCategory newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PostCategory newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PostCategory query()
 * @method static \Illuminate\Database\Eloquent\Builder|PostCategory whereColor($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PostCategory whereIcon($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PostCategory whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PostCategory whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PostCategory whereTitle($value)
 */
	class PostCategory extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Recent
 *
 * @method static \Illuminate\Database\Eloquent\Builder|Recent newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Recent newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Recent query()
 */
	class Recent extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\User
 *
 * @property int $id
 * @property string $name
 * @property string $slug
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property string $password
 * @property string|null $two_factor_secret
 * @property string|null $two_factor_recovery_codes
 * @property string|null $two_factor_confirmed_at
 * @property string|null $remember_token
 * @property int|null $current_team_id
 * @property string|null $profile_photo_path
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Kalnoy\Nestedset\Collection|\App\Models\Comment[] $comments
 * @property-read int|null $comments_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Overtrue\LaravelFavorite\Favorite[] $favorites
 * @property-read int|null $favorites_count
 * @property-read \Illuminate\Database\Eloquent\Collection|User[] $followers
 * @property-read int|null $followers_count
 * @property-read \Illuminate\Database\Eloquent\Collection|User[] $followings
 * @property-read int|null $followings_count
 * @property-read string $profile_photo_url
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Post[] $posts
 * @property-read int|null $posts_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Sanctum\PersonalAccessToken[] $tokens
 * @property-read int|null $tokens_count
 * @method static \Illuminate\Database\Eloquent\Builder|User approvedFollowers()
 * @method static \Illuminate\Database\Eloquent\Builder|User approvedFollowings()
 * @method static \Database\Factories\UserFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User notApprovedFollowers()
 * @method static \Illuminate\Database\Eloquent\Builder|User notApprovedFollowings()
 * @method static \Illuminate\Database\Eloquent\Builder|User orderByFollowersCount(string $direction = 'desc')
 * @method static \Illuminate\Database\Eloquent\Builder|User orderByFollowersCountAsc()
 * @method static \Illuminate\Database\Eloquent\Builder|User orderByFollowersCountDesc()
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCurrentTeamId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereProfilePhotoPath($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereTwoFactorConfirmedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereTwoFactorRecoveryCodes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereTwoFactorSecret($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User withoutAuth()
 */
	class User extends \Eloquent {}
}

