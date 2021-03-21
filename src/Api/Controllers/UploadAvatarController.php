<?php

namespace Abadu\AnimatedAvatars\Api\Controllers;

use Flarum\Api\Serializer\UserSerializer;
use Flarum\Api\Controller\AbstractShowController;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

use Abadu\AnimatedAvatars\Commands\UploadAvatar;

class UploadAvatarController extends AbstractShowController
{
  /**
   * {@inheritdoc}
   */
  public $serializer = UserSerializer::class;

  /**
   * @var Dispatcher
   */
  protected $bus;

  /**
   * @param Dispatcher $bus
   */
  public function __construct(Dispatcher $bus)
  {
    $this->bus = $bus;
  }

  /**
   * {@inheritdoc}
   */
  protected function data(ServerRequestInterface $request, Document $document)
  {

    $id = Arr::get($request->getQueryParams(), 'id');
    $actor = $request->getAttribute('actor');
    $file = Arr::get($request->getUploadedFiles(), 'avatar');

    return $this->bus->dispatch(
      new UploadAvatar($id, $file, $actor)
    );
  }
}
